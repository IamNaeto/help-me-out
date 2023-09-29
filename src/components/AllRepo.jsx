import React from "react";
import { Link } from "react-router-dom";

const AllRepo = () => {
    return ( 
        <main className="w-full relative top-20 py-4">
            <section className="flex items-center justify-between mx-5%">
                <div>
                    <h1 className="text-8 text-brand-dark text-center">Hello, John Mark</h1>
                    <p className="text-4 text-brand-litedark">Here are your recorded videos</p>
                </div>

                <div className="w-30% relative">
                    <input type="Search" placeholder="Search for a particular video" className="relative py-4 px-8 bg-brand-grey rounded-md border-none outline-none w-full"/>
                    <span className="i-mdi-magnify inline-block absolute left-2 top-3 text-5 text-brand-litedark"/>
                </div>
            </section>

            <section className="mt-10 border-t-solid border-t-brand-grey border-t-2">
                <p className="text-5 text-brand-litedark mb-4 mx-5% mt-5">Recent Files</p>

                <div className="grid grid-cols-2 gap-4 justify-center mx-5%">
                    <Link to="/VideoRepo" className="decoration-none text-brand-dark border-solid border-brand-grey rounded-lg p-5">
                        <div>
                            <img src="./img/video frame.png" alt="" className="w-full"/>
                        </div>

                        <div className="flex justify-between mt-4">
                            <div>
                                <h3 className="text-5">How to create Facebook Ad listing</h3>
                                <p className="text-brand-litegrey text-4 mt-1">SEPTEMBER 23, 2023</p>
                            </div>
                            <div>
                                <span className="i-mdi-link inline-block text-6 cursor-pointer hover:text-brand-litedark"/>
                                <span className="i-mdi-dots-vertical inline-block text-6 cursor-pointer hover:text-brand-litedark"/>
                            </div>
                        </div>
                    </Link>

                    <Link to="/VideoRepo" className="decoration-none text-brand-dark border-solid border-brand-grey rounded-lg p-5">
                        <div>
                            <img src="./img/video frame (1).png" alt="" className="w-full"/>
                        </div>

                        <div className="flex justify-between mt-4">
                            <div>
                                <h3 className="text-5">How to create Facebook Ad listing</h3>
                                <p className="text-brand-litegrey text-4 mt-1">SEPTEMBER 23, 2023</p>
                            </div>
                            <div>
                                <span className="i-mdi-link inline-block text-6 cursor-pointer hover:text-brand-litedark"/>
                                <span className="i-mdi-dots-vertical inline-block text-6 cursor-pointer hover:text-brand-litedark"/>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            <section className="my-10">
                <p className="text-5 text-brand-litedark mb-4 mx-5%">Files from last week</p>

                <div className="grid grid-cols-2 gap-4 justify-center mx-5%">
                    <Link to="/VideoRepo" className="decoration-none text-brand-dark border-solid border-brand-grey rounded-lg p-5">
                        <div>
                            <img src="./img/video frame (2).png" alt="" className="w-full"/>
                        </div>

                        <div className="flex justify-between mt-4">
                            <div>
                                <h3 className="text-5">How to create Facebook Ad listing</h3>
                                <p className="text-brand-litegrey text-4 mt-1">SEPTEMBER 23, 2023</p>
                            </div>
                            <div>
                                <span className="i-mdi-link inline-block text-6 cursor-pointer hover:text-brand-litedark"/>
                                <span className="i-mdi-dots-vertical inline-block text-6 cursor-pointer hover:text-brand-litedark"/>
                            </div>
                        </div>
                    </Link>

                    <Link to="/VideoRepo" className="decoration-none text-brand-dark border-solid border-brand-grey rounded-lg p-5">
                        <div>
                            <img src="./img/video frame (3).png" alt="" className="w-full"/>
                        </div>

                        <div className="flex justify-between mt-4">
                            <div>
                                <h3 className="text-5">How to create Facebook Ad listing</h3>
                                <p className="text-brand-litegrey text-4 mt-1">SEPTEMBER 23, 2023</p>
                            </div>
                            <div>
                                <span className="i-mdi-link inline-block text-6 cursor-pointer hover:text-brand-litedark"/>
                                <span className="i-mdi-dots-vertical inline-block text-6 cursor-pointer hover:text-brand-litedark"/>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </main>
     );
}
 
export default AllRepo;