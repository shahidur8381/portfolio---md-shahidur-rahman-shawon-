import React from "react";
import "./ResumePreview.scss";

const DEFAULT_RESUME_ID = "1Br5ZXsyxuR0I_oiuU2VDWTlxWumHCYK6";
const DEFAULT_PREVIEW_URL = `https://drive.google.com/file/d/${DEFAULT_RESUME_ID}/preview`;
const DEFAULT_DOWNLOAD_URL = `https://drive.google.com/file/d/${DEFAULT_RESUME_ID}/view`;

export default function ResumePreview({ isOpen, onClose, resumeUrl }) {
  if (!isOpen) return null;

  // Use resumeUrl prop if provided, otherwise fall back to default
  const previewUrl =
    resumeUrl && resumeUrl.trim()
      ? resumeUrl.replace("/view", "/preview").replace("?usp=drivesdk", "")
      : DEFAULT_PREVIEW_URL;

  const handleDownload = () => {
    // Convert preview URL to download/view URL for Google Drive, or use default
    const downloadUrl =
      resumeUrl && resumeUrl.trim()
        ? resumeUrl.replace("/preview", "/view")
        : DEFAULT_DOWNLOAD_URL;
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
            src={previewUrl}
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
