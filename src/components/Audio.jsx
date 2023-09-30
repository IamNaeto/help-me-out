import React, { useState } from "react";

const Audio = () => {
  const [isAudioEnabled, setAudioEnabled] = useState(false);
  const [audioStream, setAudioStream] = useState(null);

  const toggleAudio = async () => {
    try {
      if (!isAudioEnabled) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setAudioStream(stream);
      } else {
        // Disable the microphone
        if (audioStream) {
          const audioTracks = audioStream.getAudioTracks();
          audioTracks.forEach((track) => {
            track.stop();
          });
          setAudioStream(null);
        }
      }
      setAudioEnabled(!isAudioEnabled);
    } catch (error) {
      console.error("Error toggling audio: ", error);
    }
  };

  return (
    <div className="flex items-center justify-between text-brand-blue px-2 py-1 border-solid border-brand-blue border-1 rounded-3">
      <div className="flex items-center gap-2">
        <span className="i-mdi-microphone-outline inline-block text-8" />
        <p className="font-600">Audio</p>
      </div>

      <span
        className={`i-mdi-toggle-switch inline-block text-12 cursor-pointer ${
          isAudioEnabled ? "" : "i-mdi-toggle-switch-off"
        }`}
        onClick={toggleAudio}
      />
    </div>
  );
};

export default Audio;
