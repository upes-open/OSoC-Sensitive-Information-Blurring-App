import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

import Navbar from './Navbar'
import Footer from './Footer'

import privImg from '../assets/faqImg.png'

import '../css/faqstyles.css'

export default function Privacy() {
  return (
    <>
      <Navbar />
      <div className='splitBox my-5'>
        <div className='split row'>
          <div className="col col-12 col-md-8 splitText">
            <div className='privContent m-5'>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Sensitive Information Detection and Blurring
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      The sensitive information detection and blurring web app is designed to analyze images and PDF documents to identify sensitive or personally identifiable information (PII) within them. The app aims to provide a secure and privacy-conscious solution for users who need to share such content while protecting the confidentiality of sensitive data. It offers an automated process that identifies and blurs sensitive information to prevent unauthorized access and maintain data privacy.
                    </p>
                    <p>
                      The web app will utilize image processing techniques, Optical Character Recognition (OCR), and machine learning algorithms to analyze the uploaded files. It will detect and identify sensitive information such as pictures, credit card numbers, addresses, or any other predefined types of PII.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Data Protection and Security Measures
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We are committed to implementing robust security measures to safeguard your data. All information uploaded to our platform is encrypted and stored securely. Our infrastructure undergoes regular security audits and assessments to ensure the highest level of protection for your information.
                    </p>
                    <p>
                      Access to sensitive data is restricted to authorized personnel only, and our systems are continuously monitored to prevent unauthorized access or data breaches.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    User Consent and Control
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We prioritize user consent and control over their data. You have the ability to control the data you share with us and can delete or modify your information as needed. We ensure transparent data processing practices and provide options for users to manage their data preferences.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Information Usage and Sharing
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      The information processed within the app is solely used for the intended purposes of detecting and blurring sensitive data. We do not share, sell, or disclose your data to third parties unless required by law or with explicit user consent.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Compliance with Regulations
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Our services comply with data protection and privacy regulations. We adhere to applicable laws and regulations concerning data privacy and security, ensuring that our practices are in line with industry standards and legal requirements.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    Updates and Modifications to Privacy Policy
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We reserve the right to update our privacy policy to reflect changes in our practices or in response to regulatory updates. Users will be notified of any substantial changes to the policy, and continued use of the service implies acceptance of the updated terms.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="col col-12 col-md-4 faqImage">
            <div className='imgBox'>
              <div className="img">
                <img src={privImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
