import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

import NavBar from './navbar'
import Footer from './footer'
import faqImg from '../assets/faqImg.png'

import '../css/faqstyles.css'

export default function Faq() {
    return (
        <>
            <NavBar title="Frequently Asked Questions" />

            <div className='faqBox my-5'>
                <div className='faq row'>
                    <div className="col col-12 col-md-4 faqimage">
                        <div className='imgBox'>
                            <div className="img">
                                <img src={faqImg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-md-8 faqtext">
                        <div className='faqContent m-5'>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>How does this work?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            This is a web application that allows you to blur sensitive information in images.
                                            It uses a machine learning model to detect sensitive information in images and blur them.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>How do I use this?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            You can upload an image and select the type of information you want to blur.
                                            The model will detect the information and blur it. You can then download the blurred image.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>What types of information can I blur?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            You can blur faces, phone numbers, email addresses, credit card numbers, and bank account numbers.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>How accurate is this?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            The model is trained on a large dataset of images with sensitive information.
                                            It is able to detect sensitive information with a high degree of accuracy.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>What happens to my images?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Your images are not stored on our servers.
                                            They are processed by the model and the blurred image is returned to you.
                                            The blurred image is not stored on our servers either.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    );
}
