import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import './UploadWidget.css'

const UploadWidget = ({ onFileSelect, onRemove }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const previewFile = event.target.files[0];
    const file = event.target.files;
    const filesArray = Array.from(file);
    // setSelectedFile(URL.createObjectURL(file));
    // onFileSelect(file);
    setSelectedFile(URL.createObjectURL(previewFile));
    onFileSelect(filesArray);
    console.log(filesArray)
  };

  const handleRemove = () => {
    setSelectedFile(null);
    onRemove();
  };

  return (
    <div className="upload-widget">
      {!selectedFile ? (
        <label htmlFor="file-upload" className="upload-button">
          <FaCloudUploadAlt className="upload-icon" />
          <span>Pilih foto</span>
          <input id="file-upload" type="file" accept="image/*" multiple onChange={handleFileSelect} />
        </label>
      ) : (
        <div className="uploaded-image">
          <img src={selectedFile} alt="Selected" />
          <div className="overlay" onClick={handleRemove}>
            <span>Ganti</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadWidget;
