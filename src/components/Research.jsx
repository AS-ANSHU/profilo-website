import React from "react";

const Research = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Notepad Icon */}
      <svg
        className="text-violet-500 p-4 bg-violet-100 w-16 h-16"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2v4" />
        <path d="M12 2v4" />
        <path d="M16 2v4" />
        <rect width="16" height="18" x="4" y="4" rx="2" />
        <path d="M8 10h6" />
        <path d="M8 14h8" />
        <path d="M8 18h5" />
      </svg>
    </div>
  );
};

export default Research;
