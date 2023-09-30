import React from "react";
import { Link } from "react-router-dom"

const Record = () => {
    return (
       <main>  
        <section className="w-full grid grid-cols-2 gap-4 relative top-10 px-5% py-8%">
            <section className="border-r-brand-litegrey border-r-solid border-r-1 pr-4">
                <h1>Your video is ready!</h1>
                <p className="text-3.5 mt-4 mb-3 text-brand-litedark">Name</p>
                <div className="flex items-center text-center text-brand-blue  text-5 font-600 gap-2 mb-5">
                    <p>Untitled_Video_20232509</p>
                    <span className="i-mdi-square-edit-outline inline-block text-5 cursor-pointer ml-4" />
                </div>
                <div className="w-95% relative mb-5">
                    <input type="email" placeholder="enter email of receiver" className="relative py-4 pl-4 pr-10 bg-brand-grey rounded-md border-none outline-none w-full"/> 
                    <Link to="/RecordReady" className="absolute right-3 top-2 decoration-none p-2 rounded-md bg-#605C84 border-none outline-none text-4 text-brand-white cursor-pointer">Send</Link>
                </div>

                <p className="font-600 mb-2">Video Url</p>
                <div  className="w-95% flex items-center justify-between relative p-3 bg-brand-grey rounded-md border-none outline-none">
                        
                        <p className="text-3">https://www.helpmeout/Untitled_Video_20232509</p>
                        <div className="text-3.5 flex items-center gap-2 border-solid border-brand-dark border-1.5 rounded-md p-1 cursor-pointer">
                            <span className="i-mdi-content-copy inline-block"/>
                            <p>Copy URL</p>
                        </div>
                </div>
                <div className="py-8">
                    <p className="font-600 text-3.5">Share your video</p>
                    <div className="py-2 flex items-center gap-4 mt-2">
                        <button  className="py-2 px-3 border-brand-dark border-1 border-solid outline-none rounded-md bg-brand-white flex items-center cursor-pointer"> <img src="./img/Facebook svg.png" className="w-4 mr-2"/> Facebook </button>
                        <button  className="py-2 px-3 border-brand-dark border-1 border-solid outline-none rounded-md bg-brand-white flex items-center cursor-pointer"> <img src="./img/Whatsapp.png" className="w-3 mr-2"/> Whatsapp </button>
                        <button  className="py-2 px-3 border-brand-dark border-1 border-solid outline-none rounded-md bg-brand-white flex items-center cursor-pointer"> <img src="./img/Telegram.png" className="w-4 mr-2"/> Telegram</button>
                    </div>
                </div>
            </section>

            <section className="pl-4">
                <div>
                    <div className="h-80 w-full%">
                        <img src="./img/video.png" alt="" className="h-full w-full"/>
                    </div>
                </div>

                <div className="my-2">
                    <h4>Transcript</h4>

                    <select name="" id="" className="py-1.5 px-3 rounded-sm outline-none mt-4">
                        <option value="">English</option>
                        <option value="">Igbo</option>
                        <option value="">Spanish</option>
                        <option value="">Dutch</option>
                    </select>
                </div>

                <div className="mt-10 mb-4 flex gap-8">
                   <div>
                        <div className="flex gap-4 py-4">
                            <h4>0.01</h4> 
                            <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </p>
                        </div>

                        <div className="flex gap-4 py-4">
                            <h4>0.15</h4> 
                            <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the . Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-ha</p>
                        </div>
                        <div className="flex gap-4 py-4">
                            <h4>0.30</h4> 
                            <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </p>
                        </div>
                        <div className="flex gap-4 pt-4 mb-2">
                            <h4 className="text-brand-litedark">1.00</h4> 
                            <p className="text-brand-litedark">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the  </p>
                        </div>
                    </div>

                    <div>
                        <img src="./img/scroller.png" className="h-full"/>
                    </div>
                </div>
            </section>
        </section>

        <section className="px-5% py-5% flex flex-col items-center text-center bg-brand-grey mb-15 w-full">
                <h3>To ensure the availability and privacy of your video,  <br /> we recommend saving it to your account.</h3>
                <button className="py-3 px-4 bg-brand-blue text-brand-white text-4 rounded-md border-solid border-brand-blue outline-none my-5 cursor-pointer">Save Video</button>
                <h3 className="text-brand-litedark">Don’t have an account? <a href="" className="text-brand-blue">Create account</a> </h3>
        </section>

        <section className="absolute top-60 left-30% w-30% bg-#F2F4F7 p-3% mb-10 rounded-md shadow-md shadow-brand-litedark">

            <div className="flex items-end justify-end"> 
                <span className="py-1 px-2.5 rounded-20 border-solid border-1.5 border-brand-litedark cursor-pointer">x</span>
            </div>

            <div className="mb-20 flex flex-col items-center justify-center text-center">
                <div className="w-full grid grid-cols-1 place-items-center justify-center">
                    <img src="./img/success-kite.png" alt="" className="w-60% mx-auto"/>
                </div>
                <p>Your video link has been sent to <span className="color-brand-blue font-bold">johnmark@gmail.com</span></p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
                <p>Would you need to view this video later? Save to your account now!</p>
                <Link to="/Screen" className="py-3 px-4 decoration-none  bg-brand-blue text-brand-white text-4 rounded-md border-solid border-brand-blue outline-none my-8 cursor-pointer">Save Video</Link>
                <p className="text-brand-litedark">Don’t have an account? <a href="" className="text-brand-blue">Create account</a> </p>
            </div>
        </section>

    </main>
     );
}
 
export default Record;