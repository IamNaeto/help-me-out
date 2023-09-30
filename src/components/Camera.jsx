import React, { useState, useEffect } from "react";

const Camera = () => {
  const [isCameraOn, setCameraOn] = useState(false);
  const [stream, setStream] = useState(null);

  const toggleCamera = () => {
    setCameraOn(!isCameraOn);
  };

  useEffect(() => {
    if (isCameraOn) {
      // Enable the camera
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((cameraStream) => {
          setStream(cameraStream);
        })
        .catch((error) => {
          console.error("Error enabling camera: ", error);
        });
    } else {
      // Disable the camera and stop the stream
      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
        setStream(null);
      }
    }
  }, [isCameraOn]);

  return (
    <main className="flex items-center justify-between text-brand-blue border-solid px-2 py-1 border-brand-blue border-1 rounded-3">
      <div className="flex items-center gap-2">
        <span className="i-mdi-video-outline inline-block text-8" />
        <p className="font-600">Camera</p>
      </div>

      <span
        className={`i-mdi-toggle-switch inline-block text-12 cursor-pointer ${
          isCameraOn ? "" : "i-mdi-toggle-switch-off"
        }`}
        onClick={toggleCamera}
      />
    </main>
  );
};

export default Camera;
