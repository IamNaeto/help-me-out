import React from "react";

const RecordTab = () => {
    return ( 
        <main className="flex items-center gap-6 absolute bottom-2 left-2">
            <div className="p-2 w-30 h-30 rounded-100 bg-brand-litedark">

            </div>
            <div className="flex items-center gap-2 p-5 rounded-50 border-solid border-8 border-brand-litegrey bg-brand-dark text-brand-white">
                <div className="flex items-center gap-2 pr-3 mr-2 border-r-2 border-r-solid border-r-brand-litegrey">
                    <h3>00:03:45</h3>
                    <img src="./img/indicator.png" alt="" />
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center flex-col cursor-pointer">
                        <span className="i-mdi-pause inline-block text-6"/>
                        <p className="text-3">Pause</p>
                    </div>
                    <div className="flex items-center flex-col cursor-pointer">
                        <span className="i-mdi-stop inline-block text-6"/>
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
                    
                    <span className="i-mdi-trash-can-outline text-7 cursor-pointer"/>
                </div>
            </div>
        </main>
     );
}
 
export default RecordTab;