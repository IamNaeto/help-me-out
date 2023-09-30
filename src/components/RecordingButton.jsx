import React from "react";

const RecordingButton = ({ onClick }) => {
  return (
    <button
      className='decoration-none cursor-pointer px-2 py-4 bg-brand-blue hover-bg-brand-bluedark border-solid border-brand-blue border-1 rounded-3 text-4.5 text-brand-white'
      onClick={onClick} // Call the provided onClick function when the button is clicked
    >
      Start Recording
    </button>
  );
};

export default RecordingButton;
