import React from 'react';

import DropFileInput from './dropfileinput';
import Navbar from './Navbar';

import '../assets/test.css';
import Footer from './Footer';

function Upload() {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <>
            
            <Navbar/>
            <div className='content-wrapper'>
                <div className="contentBox">
                    <div className='content py-4'>
                        <div className='headerBox text-center'>
                            <h4 className='headerContent'>SELECT YOUR FILES</h4>
                        </div>
                        <div className='uploadBox'>
                            <div className='uploadContent'>
                                <DropFileInput
                                    onFileChange={(files) => onFileChange(files)}
                                />
                                <button className='btn btn-primary' id='upload'>
                                    UPLOAD
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

            
        </>
    );
}

export default Upload;