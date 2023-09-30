// src/popup/App.js
import ReactDOM from 'react-dom';
import Camera from '../components/Camera';
import Audio from '../components/Audio';
import RecordingButton from '../components/RecordingButton';
import Screens from '../components/Screens';
import React, { useState, useEffect } from 'react';

const App = () => {
    const [showPopout, setShowPopout] = useState(true); // State to manage popout visibility
    const [recordingStatus, setRecordingStatus] = useState("idle");
    const [isPaused, setIsPaused] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [recordedChunks, setRecordedChunks] = useState([]);

    useEffect(() => {
        if (mediaRecorder) {
            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    setRecordedChunks((prevChunks) => [...prevChunks, event.data]);
                }
            };

            mediaRecorder.onstop = () => {
                const recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
                // Send the recorded content to your endpoint here
                // Replace 'yourEndpointURL' with the actual endpoint URL
                const formData = new FormData();
                formData.append('recording', recordedBlob);
                
                fetch("yourEndpointURL", {
                    method: "POST",
                    body: formData,
                })
                .then((response) => {
                    // Handle the response from your server if needed
                    console.log("Recording sent successfully!");
                })
                .catch((error) => {
                    // Handle errors if the request fails
                    console.error("Error sending recording:", error);
                });
            };
        }
    }, [mediaRecorder, recordedChunks]);

    const startRecording = async () => {
        try {
            setShowPopout(false); // Hide the popout
            setRecordingStatus("recording");

            // Capture the user's screen and audio
            const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });

            // Create a media recorder and start recording
            const recorder = new MediaRecorder(stream);
            setMediaRecorder(recorder);

            const chunks = [];
            recorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    chunks.push(event.data);
                }
            };

            recorder.start();

            // Optionally, you can also set a timeout to stop recording after a certain duration
            // For example, to stop recording after 5 minutes (adjust as needed)
            setTimeout(() => {
                stopRecording();
            }, 5 * 60 * 1000); // 5 minutes in milliseconds
        } catch (error) {
            console.error("Error starting recording:", error);
            setRecordingStatus("idle");
            setShowPopout(true); // Show the popout again in case of an error
        }
    };

    const stopRecording = () => {
        if (recordingStatus === "recording") {
            // Stop recording and set the status to 'stopped'
            mediaRecorder.stop();
            setRecordingStatus("stopped");
        }
    };

    const handlePauseResumeClick = () => {
        if (recordingStatus === "recording" || recordingStatus === "paused") {
            // Toggle the paused state
            setIsPaused((prevState) => !prevState);
            // Depending on the recording status, perform pause or resume logic here
            if (isPaused) {
                mediaRecorder.pause();
                setRecordingStatus("paused");
            } else {
                mediaRecorder.resume();
                setRecordingStatus("recording");
            }
        }
    };

    const deleteRecording = () => {
        setRecordingStatus("idle");
        setRecordedChunks([]);
        // Delete recording logic here
    };

    return (
    <> 
        {showPopout ? (
        <main className='Popout w-25% p-2% shadow-md rounded-5 absolute right-8 top-2'>
            <div className='flex items-center justify-between mb-6'>
                <div className='w-40 flex items-center'>
                    <div><img src="../img/HMOicon.png" alt="logo" className='mr-2'/></div>
                    <h3>HelpMeOut</h3>
                </div>

                <div>
                    <span className='i-mdi-cog-outline inline-block text-7 text-brand-blue'/>
                    <span className='i-mdi-close-circle-outline inline-block text-7 text-brand-litedark ml-2'/>
                </div>
            </div>
            <p className='text-4 text-brand-blue'>This extension helps you record and share help videos with ease.</p>

            <Screens />

            <section className='grid grid-cols-1 gap-4'>
                <Camera />

                <Audio />

                <RecordingButton onClick={startRecording}/>
            </section>
        </main>

        ) : (
        <main className="RecordTab flex items-center gap-6 absolute bottom-2 left-2">
            <div className="p-2 w-30 h-30 rounded-100 bg-brand-litedark">

            </div>
            <div className="flex items-center gap-2 p-5 rounded-50 border-solid border-8 border-brand-litegrey bg-brand-dark text-brand-white">
                <div className="flex items-center gap-2 pr-3 mr-2 border-r-2 border-r-solid border-r-brand-litegrey">
                    <h3>00:03:45</h3>
                    <img src="./img/indicator.png" alt="" />
                </div>
                <div className="flex items-center gap-4">
                <div className="flex items-center flex-col cursor-pointer" onClick={handlePauseResumeClick}>
                    <span className={` ${isPaused ? "i-mdi-play" : "i-mdi-pause"} inline-block text-6`} />
                    <p className="text-3">Pause</p>
                </div>
                    <div className="flex items-center flex-col cursor-pointer">
                        <span className="i-mdi-stop inline-block text-6" onClick={stopRecording}/>
                        <p className="text-3">Stop</p>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer">
                        <span className="i-mdi-video-outline inline-block text-6"/>
                        <p className="text-3">Camera</p>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer">
                        <span className="i-mdi-microphone-outline inline-block text-6"/>
                        <p className="text-3">Mic</p>
                    </div>
                    
                    <span className="i-mdi-trash-can-outline text-7 cursor-pointer" onClick={deleteRecording}/>
                </div>
            </div>
        </main>
        )}
    </>
     );
}
 
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
