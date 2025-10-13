import React from "react";
import "./ResumePreview.scss";

export default function ResumePreview({isOpen, onClose, resumeUrl}) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Convert preview URL to download URL for Google Drive
    const downloadUrl = resumeUrl.replace("/preview", "/view");
    window.open(downloadUrl, "_blank");
  };

  return (
    <div className="resume-preview-overlay" onClick={onClose}>
      <div className="resume-preview-modal" onClick={e => e.stopPropagation()}>
        <div className="resume-preview-header">
          <h2>Resume Preview</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="resume-preview-content">
          <iframe
            src={resumeUrl}
            title="Resume Preview"
            className="resume-iframe"
          />
        </div>
        <div className="resume-preview-footer">
          <button className="preview-button secondary" onClick={onClose}>
            Close
          </button>
          <button className="preview-button primary" onClick={handleDownload}>
            <i className="fas fa-download"></i> Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}
