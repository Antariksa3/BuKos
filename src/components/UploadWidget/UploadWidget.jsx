import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import './UploadWidget.css'

const UploadWidget = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
  };

  const handleRemove = () => {
    setSelectedFile(null);
  };

  return (
    <div className="upload-widget">
      {!selectedFile ? (
        <label htmlFor="file-upload" className="upload-button">
          <FaCloudUploadAlt className="upload-icon" />
          <span>Pilih foto</span>
          <input id="file-upload" type="file" accept="image/*" onChange={handleFileSelect} />
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
