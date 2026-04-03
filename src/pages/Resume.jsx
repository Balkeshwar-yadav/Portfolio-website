import React from "react";

const Resume = () => {
  return (
    <a
      href="/images/resume.pdf"          // path to your PDF
      download="My_Resume.pdf"   // optional: file name for download
      target="_blank"            // opens PDF in new tab
      rel="noopener noreferrer"  // security best practice
    >
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Download Resume
      </button>
    </a>
  );
};

export default Resume;