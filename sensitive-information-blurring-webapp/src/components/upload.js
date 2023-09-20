import '../css/uploadstyles.css';
// import DropFileInput from './dropfileinput';
import NavBar from './navbar';

import browseImg from '../assets/browse.png'
import dropImg from '../assets/dropbox.png'
import driveImg from '../assets/drive.png'

function Upload() {

    // const onFileChange = (files) => {
    //     console.log(files);
    // }

    return (
        <>
            <NavBar />

            <div className='content'>
                <div className="contentBox">
                    <div className='headerBox'>
                        <h4 className='headerContent'>SELECT YOUR FILES</h4>
                    </div>
                    <div className='iconsBox'>
                        <button className='icon'>
                            <img src={browseImg} alt='folder' className='iconImg' />
                        </button>
                        <button className='icon'>
                            <img src={driveImg} alt='folder' className='iconImg' />
                        </button>
                        <button className='icon'>
                            <img src={dropImg} alt='folder' className='iconImg' />
                        </button>
                    </div>
                    <div className='uploadBox'>
                        <div className='uploadContent'>
                            <p className='uploadText'>or drag and drop your files here</p>
                            <button className='btn btn-primary' id='upload'>
                                UPLOAD
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <div className="box">
                <h2 className="header">
                    Drop Your Files here
                </h2>
                <DropFileInput
                    onFileChange={(files) => onFileChange(files)}
                />
            </div>
            <div>
                <button id='upload'>Upload</button>
            </div> */}
        </>
    );
}

export default Upload;