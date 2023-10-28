import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import browseImg from '../assets/browse.png';
import dropImg from '../assets/dropbox.png';
import driveImg from '../assets/drive.png';
const style = {
    position: 'absolute',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};
const DropFileInput = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const wrapperRef = useRef(null);
    const [fileList, setFileList] = useState([]);
    const [previewFile, setPreviewFile] = useState(null);

    const onDragEnter = () => wrapperRef.current.classList.add('border', 'border-dashed', 'border-gray-400');
    const onDragLeave = () => wrapperRef.current.classList.remove('border', 'border-dashed', 'border-gray-400');
    const onDrop = () => wrapperRef.current.classList.remove('border', 'border-dashed', 'border-gray-400');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            setPreviewFile(URL.createObjectURL(newFile));
            props.onFileChange(updatedList);
        }
    };

    const fileRemove = (file) => {
        const updatedList = fileList.filter(item => item !== file);
        setFileList(updatedList);
        setPreviewFile(null);
        props.onFileChange(updatedList);
    };

    return (
        <div className="container mx-auto p-6">
            <div
                className="w-full max-w-md border-2 border-gray-300 border-dashed rounded-lg p-4 my-4 mx-auto text-center"
                ref={wrapperRef}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="mb-4 flex flex-col justify-center items-center">
                    <label className="cursor-pointer">
                        <img src={browseImg} alt="folder" className="w-16 h-16" />
                        <input className="hidden" type="file" value="" onChange={onFileDrop} />
                    </label>
                </div>
                <div className="mb-4 flex flex-col justify-center items-center">
                    <label className="cursor-pointer">
                        <img src={driveImg} alt="folder" className="w-16 h-16" />
                    </label>
                </div>
                <div className="mb-4 flex flex-col justify-center items-center">
                    <label className="cursor-pointer">
                        <img src={dropImg} alt="folder" className="w-16 h-16" />
                    </label>
                </div>
                <p className="text-sm text-gray-500">Or Drag & Drop your files here</p>
            </div>

            {fileList.length > 0 && (
                <div className="max-w-md mx-auto">
                    {fileList.map((item, index) => (
                        <div key={index} className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative my-2" role="alert">
                            <strong className="font-bold">{item.name}</strong>
                            <span className="block sm:inline"> - {item.size} B</span>
                            <button
                                className="absolute top-0 bottom-0 right-0 px-4 py-3"
                                onClick={() => fileRemove(item)}
                            >
                                <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <title>Close</title>
                                    <path d="M14.348 5.652a.5.5 0 0 0-.707 0L10 9.293l-3.646-3.64a.5.5 0 0 0-.707.707L9.293 10l-3.64 3.646a.5.5 0 0 0 .708.706L10 10.707l3.646 3.647a.5.5 0 0 0 .707-.708L10.707 10l3.647-3.646a.5.5 0 0 0 0-.702z" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {previewFile && (
                <div className="max-w-md mx-auto my-4">
                    <div className="border border-gray-300 rounded-lg p-4">
                        <img src={previewFile} alt="Blurred Preview" className="w-full rounded-lg shadow-lg" />
                        <div className="text-center mt-4 font-bold text-xl">

                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleOpen}>
                                Download
                            </button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Download Blurred Image
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        Are you sure you want to download the image?
                                    </Typography>
                                    <a href={previewFile} download>
                                        <Button variant="contained" onClick={handleClose} sx={{ mt: 2 }}>
                                            Yes
                                        </Button>
                                    </a>
                                </Box>
                            </Modal>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

DropFileInput.propTypes = {
    onFileChange: PropTypes.func,
};

export default DropFileInput;
