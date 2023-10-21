import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import '../css/dropfileinput.css';

import browseImg from '../assets/browse.png'
import dropImg from '../assets/dropbox.png'
import driveImg from '../assets/drive.png'

const DropFileInput = props => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    return (
        <>
            <div className='dropFileWrapper'>
                <div className="dropFileInput"
                    ref={wrapperRef}
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                >
                    <div className="dropIcons text-center">
                        <div className='iconsBox'>
                            <label className='icon'>
                                <img src={browseImg} alt='folder' className='iconImg' />
                                <input className='localinput' type="file" value="" onChange={onFileDrop} />
                            </label>
                            <label className='icon'>
                                <img src={driveImg} alt='folder' className='iconImg' />
                            </label>
                            <label className='icon'>
                                <img src={dropImg} alt='folder' className='iconImg' />
                            </label>
                        </div>
                        <p>Or Drag & Drop your files here</p>
                    </div>
                </div>
            </div>

            {
                fileList.length > 0 ? (
                    <>
                        <div className="alerts">
                            {
                                fileList.map((item, index) => (
                                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                                        <div className='alert-heading'> {item.name} </div>
                                        <p className='p-0 m-0'>{item.size} B</p>
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={fileRemove}></button>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                ) : null
            }
        </>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;