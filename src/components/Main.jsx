import React from "react";

const Main = () => {
    return ( 
        <main className="bg-brand-grey relative top-20 z-1">
            <section className="px-5% py-20 grid grid-cols-2 gap-4 bg-brand-white">
                <div>
                    <h1 className="text-15 text-brand-dark font-700">Show Them <br />
                    Don’t Just Tell</h1>
                    <p className="text-5 font-400 text-brand-dark max-w-">Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
                    <button className="p-3 bg-brand-blue text-brand-white text-4 border border-1 outline-none rounded-1.5 mt-4 flex items-center justify-center cursor-pointer  hover-bg-brand-bluedark transition-all transition-1">Install HelpMeOut <span className="i-mdi-arrow-right-thin inline-block text-5 ml-2"/></button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center justify-between">
                        <div className="relative">
                            <img src="./img/Frame1.png" alt="" className="w-full"/>
                        </div>
                        <div className="relative">
                            <img src="./img/Frame2.png" alt="" className="w-full relative z-2"/>
                            <img src="./img/grid1.png" alt="" className="absolute right-10 top--4 z-0 w-full"/>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="./img/Frame3.png" alt="" className="w-full relative z-2"/>
                        <img src="./img/grid2.png" alt="" className="absolute z-0 left-14 top--10 w-full"/>
                    </div>
                </div>
            </section>

            <section className="bg-brand-white px-5% py-15 my-8" id="Features">
                <h1 className="text-8 text-brand-dark text-center mt-10 mb-2">Features</h1>
                <p className="text-4.5 text-center text-brand-litedark mb-8">Key Highlights of Our Extension</p>

                <div className="grid grid-cols-2 gap-4 pb-10">
                    <div>
                        <div className="flex items-start gap-4">
                            <img src="./img/Icon placeholder.png" alt="" />
                            <div className="mb-8">
                                <h2 className="text-6 text-brand-bluedark mb-2">Simple Screen Recording</h2>
                                <p className="text-4.5 text-brand-litedark max-w-75%">Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <img src="./img/Icon placeholder (1).png" alt="" />
                            <div className="mb-8">
                                <h2 className="text-6 text-brand-bluedark mb-2">Easy-to-Share URL</h2>
                                <p className="text-4.5 text-brand-litedark max-w-75%">Share your recordings instantly with a single link. No attachments, no downloads.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <img src="./img/Icon placeholder (2).png" alt="" />
                            <div>
                                <h2 className="text-6 text-brand-bluedark">Revisit Recordings</h2>
                                <p className="text-4.5 text-brand-litedark max-w-75%">Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src="./img/Video Repository.png" alt=""  className="w-full h-full"/>
                    </div>
                </div>
            </section>

            <section className="bg-brand-white px-5% py-15 my-8" id="HowItWorks">
                <h1 className="text-8 text-brand-dark text-center mt-10 mb-8">How it works</h1>

                <div className="grid grid-cols-3 place-items-center">
                    <div className="text-center p-4">
                        <span className="text-7 text-center bg-brand-blue text-brand-white py-1 px-4 rounded-100%">1</span>
                        <h2 className="text-6 text-brand-bluedark mt-4">Record Screen</h2>
                        <p className="text-4.5 text-brand-litedark my-4">Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
                        <div>
                            <img src="./img/screen.png" alt="" className="w-full"/>
                        </div>
                    </div>

                    <div className="text-center p-4">
                        <span className="text-7 text-center bg-brand-blue text-brand-white py-1 px-4 rounded-100%">2</span>
                        <h2 className="text-6 text-brand-bluedark mt-4">Share Your Recording</h2>
                        <p className="text-4.5 text-brand-litedark my-4">We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
                        <div>
                            <img src="./img/screen.png" alt="" className="w-full"/>
                        </div>
                    </div>

                    <div className="text-center p-4">
                        <span className="text-7 text-center bg-brand-blue text-brand-white py-1 px-4 rounded-100%">3</span>
                        <h2 className="text-6 text-brand-bluedark mt-4">Learn Effortlessly</h2>
                        <p className="text-4.5 text-brand-litedark my-4">Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
                        <div>
                            <img src="./img/screen.png" alt="" className="w-full"/>
                        </div>
                    </div>
                </div>

            </section>
        </main>
     );
}
 
export default Main;