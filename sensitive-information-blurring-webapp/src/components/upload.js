import '../assets/test.css';
import DropFileInput from './dropfileinput';

function Upload() {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div>
            <h1 id='heading'>Welcome to Sensitive Information Blurring</h1>
        <div className="box">
            <h2 className="header">
                Drop Your Files here
            </h2>
            <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />
        </div>
        <button id='upload'>Upload</button>
        </div>
    );
}

export default Upload;