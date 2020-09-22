import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import './styles.css';

const Dropzone = ({ onFileUploaded }) => {
    const [selectedFileUrl, setSelectedFileUrl] = useState('');

    const onDrop = useCallback(([file]) => {
        const url = URL.createObjectURL(file);

        setSelectedFileUrl(url);
        onFileUploaded(file);
    }, [onFileUploaded]);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

    return (
        <div className="dropzone" {...getRootProps()} >
            <input {...getInputProps()} accept="image/*" />

            {selectedFileUrl ? (
                <img src={selectedFileUrl} alt="Point Thumb" />
            ) : (
                    <p><FiUpload />Imagem do ponto de coleta</p>
                )
            }
        </div>
    );
};

export default Dropzone;
