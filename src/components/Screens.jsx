import React, { useState } from "react";

const Screens = () => {
  const [sharingMode, setSharingMode] = useState(null);

  const handleFullScreenClick = async () => {
    try {
      // Start fullscreen screen sharing
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      // Use the stream for screen sharing (you can replace this with your logic)
      console.log("Started fullscreen screen sharing with stream: ", stream);
      setSharingMode("fullScreen");
    } catch (error) {
      console.error("Error starting fullscreen screen sharing: ", error);
    }
  };

  const handleCurrentTabClick = async () => {
    try {
      // Capture the current tab's content
      const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
      const stream = await chrome.tabCapture.capture(
        {
          audio: false,
          video: true,
          videoConstraints: {
            mandatory: {
              chromeMediaSource: "tab",
              chromeMediaSourceId: activeTab.id,
            },
          },
        },
        (stream) => {
          if (stream) {
            // Use the stream for tab sharing (you can replace this with your logic)
            console.log("Started current tab screen sharing with stream: ", stream);
            setSharingMode("currentTab");
          } else {
            console.error("Error starting current tab screen sharing.");
          }
        }
      );
    } catch (error) {
      console.error("Error starting current tab screen sharing: ", error);
    }
  };

  return (
    <div className="flex items-center justify-between my-8 text-brand-blue">
      <div
        className={`flex flex-col items-center text-4.5 cursor-pointer ${
          sharingMode === "fullScreen" ? "font-bold" : ""
        }`}
        onClick={handleFullScreenClick}
      >
        <span className="i-mdi-monitor inline-block text-8" />
        <p>Full screen</p>
      </div>

      <div
        className={`flex flex-col items-center text-4.5 cursor-pointer ${
          sharingMode === "currentTab" ? "font-bold" : ""
        }`}
        onClick={handleCurrentTabClick}
      >
        <span className="i-mdi-vector-arrange-below inline-block text-8" />
        <p>Current Tab</p>
      </div>
    </div>
  );
};

export default Screens;
