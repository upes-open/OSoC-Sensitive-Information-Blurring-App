import cv2
import easyocr
import re

def extract_name_and_date(image_path):
    # Read the image
    image = cv2.imread(image_path)

    # Convert the image to grayscale
    grayscale_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Use easyocr to extract text
    reader = easyocr.Reader(['en'])
    results = reader.readtext(grayscale_image)

    # Extracted text
    extracted_text = ' '.join(result[1] for result in results)

    # Display the OCR results
    print("OCR Results:")
    for result in results:
        print(f"Text: {result[1]}, Bounding Box Coordinates: {result[0]}")

    # Adjusted regular expression for date format
    date_pattern = re.compile(r'(\d{2}[/\s:]\d{2}[/\s:]\d{4})')

    date_match = None
    # Iterate through the OCR results to find date patterns
    for i, result in enumerate(results):
        text = result[1]

        # Combine consecutive lines into a single unit
        if i + 1 < len(results):
            next_text = results[i + 1][1]
            text += ' ' + next_text

        date_match = re.search(date_pattern, text)
        if date_match:
            break  

    date_coordinates = None
    if date_match:
        # Extract the matched date
        matched_date = date_match.group(1)
        print(f"Matched Date: {matched_date}")

        # Find the coordinates of the matched date in the OCR results
        for result in results:
            if matched_date in result[1]:
                date_coordinates = result[0]
                break

    #  regular expression for name format, starting with capital letter , and then following word is also capital 
    name_pattern = re.compile(r'\b([A-Z][a-z]* [A-Z][a-z]*)\b')  #

    name_match = None
    # Iterate through the OCR results to find name patterns
    for result in results:
        text = result[1]
        name_match = re.search(name_pattern, text)
        if name_match:
            break  # Exit the loop once a name match is found

    name_coordinates = None
    if name_match:
        # Extract the matched name
        matched_name = name_match.group(1)
        print(f"Matched Name: {matched_name}")

        # Find the coordinates of the matched name in the OCR results
        for result in results:
            if matched_name in result[1]:
                name_coordinates = result[0]
                break

    # Create a copy of the image to draw rectangles on
    image_with_boxes = image.copy()

    # Draw a rectangle around the matched date
    if date_coordinates:
        cv2.rectangle(image_with_boxes, (int(date_coordinates[0][0]), int(date_coordinates[0][1])),
                      (int(date_coordinates[2][0]), int(date_coordinates[2][1])), (0, 0, 255), 2)

        # Blur the region inside the rectangle
        region_to_blur = image[int(date_coordinates[0][1]):int(date_coordinates[2][1]),
                               int(date_coordinates[0][0]):int(date_coordinates[2][0])]
        image_with_boxes[int(date_coordinates[0][1]):int(date_coordinates[2][1]),
                         int(date_coordinates[0][0]):int(date_coordinates[2][0])] = cv2.GaussianBlur(region_to_blur, (25, 25), 0)

    # Draw a rectangle around the matched name
    if name_coordinates:
        cv2.rectangle(image_with_boxes, (int(name_coordinates[0][0]), int(name_coordinates[0][1])),
                      (int(name_coordinates[2][0]), int(name_coordinates[2][1])), (0, 255, 0), 2)

        # Blur the region inside the rectangle
        region_to_blur = image[int(name_coordinates[0][1]):int(name_coordinates[2][1]),
                               int(name_coordinates[0][0]):int(name_coordinates[2][0])]
        image_with_boxes[int(name_coordinates[0][1]):int(name_coordinates[2][1]),
                         int(name_coordinates[0][0]):int(name_coordinates[2][0])] = cv2.GaussianBlur(region_to_blur, (25, 25), 0)
    # Use a pre-trained face detection classifier
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

    
    cv2.imshow('Image with Bounding Boxes', image_with_boxes)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

    return extracted_text


image_path = 'sample3.jpg'
result_text = extract_name_and_date(image_path)

# Print the extracted text
print("Extracted Text:")
print(result_text)
