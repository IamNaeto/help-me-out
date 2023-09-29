import React from "react";

const Repo = () => {
    return ( 
        <main className="w-full relative top-20 px-5% py-4">
            <section className="flex items-center gap-2 mb-5 [&>a]:text-brand-dark [&>a]:text-4 [&>a]:text-4">
                <a href="" className="hover-text-brand-blue hover-font-600 transition- decoration-none">Home /</a>
                <a href="" className="hover-text-brand-blue hover-font-600 transition-all decoration-none">Recent Videos /</a>
                <a href="" className="text-brand-blue font-600 decoration-none">How To Create A Facebook Ad Listing </a>
            </section>

            <section className="w-full">
                <div className="flex items-center text-center gap-2 mb-5">
                    <h3>How To Create A Facebook Ad Listing </h3>
                    <span className="i-mdi-square-edit-outline inline-block text-5 cursor-pointer" />
                </div>

                <div className="w-full h-100 border-brand-grey border-solid border-2 rounded-5 p-4 mb-5">
                    <img src="./img/videorepoframe.png" alt="" className="w-full h-full"/>
                </div>

                <div className="flex items-center justify-between">
                    <div className="w-40% relative">
                    <input type="email" className="relative py-4 pl-4 pr-10 bg-brand-grey rounded-md border-none outline-none w-full"/> <button className="absolute right-3 top-2 p-2 rounded-md bg-#605C84 border-none outline-none text-4 text-brand-white cursor-pointer">Send</button>
                    </div>

                    <div  className="w-45% flex items-center justify-between relative p2 bg-brand-grey rounded-md border-none outline-none">
                        <p className="text-3">https://www.helpmeout/Untitled_Video_20232509</p>
                        <div className="text-3.5 flex items-center gap-2 border-solid border-brand-dark border-1.5 rounded-md p-1 cursor-pointer">
                            <span className="i-mdi-content-copy inline-block"/>
                            <p>Copy URL</p>
                        </div>
                    </div>
                </div>

                <div className="py-8">
                    <h4>Share your video</h4>
                    <div className="py-2 flex items-center gap-4 mt-2">
                        <button  className="py-2 px-3 border-brand-dark border-1 border-solid outline-none rounded-md bg-brand-white flex items-center cursor-pointer"> <img src="./img/Facebook svg.png" className="w-4 mr-2"/> Facebook </button>
                        <button  className="py-2 px-3 border-brand-dark border-1 border-solid outline-none rounded-md bg-brand-white flex items-center cursor-pointer"> <img src="./img/Whatsapp.png" className="w-3 mr-2"/> Whatsapp </button>
                        <button  className="py-2 px-3 border-brand-dark border-1 border-solid outline-none rounded-md bg-brand-white flex items-center cursor-pointer"> <img src="./img/Telegram.png" className="w-4 mr-2"/> Telegram</button>
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
                        <img src="./img/scroller.png" className="h-80"/>
                    </div>
                </div>
            </section>
        </main>
     );
}
 
export default Repo;