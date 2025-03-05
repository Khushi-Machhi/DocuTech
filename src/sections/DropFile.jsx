import React, { useState } from "react";
import "./sec.css";
import "./cssFiles/DropFile.css";
import uploadicon from "../assets/upload.svg";
import magicicon from "../assets/magic.svg";

export default function DropFile() {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(URL.createObjectURL(uploadedFile));
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(URL.createObjectURL(droppedFile));
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <section id="dropfile" className="s2 section">
    <div className="container">

      <div className="upperdiv">
        <div className="drop-area" onDrop={handleDrop} onDragOver={handleDragOver}>
          <label>
            <input type="file" className="file-input" onChange={handleFileUpload} />
            <span>Drop your file here</span>
          </label>
          <label className="upload-button">
            <input type="file" className="file-input" onChange={handleFileUpload} />
            <img className="img" src={uploadicon} alt="uploac icon" />
            Upload File
          </label>
        </div>
        OR
        <button className="generate-button"><img className="img" src={magicicon} alt="magic icon" />Generate with AI</button>
      </div>

      <div className="preview-area">
        {file ? <img src={file} alt="Uploaded file" className="preview-image" /> : <p className="placeholder-text"></p>}
      </div>
    </div>
    
    </section>
  );
}
