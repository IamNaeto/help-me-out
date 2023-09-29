import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <main className="relative top-10 w-full flex items-center justify-center pt-10">
      <section className="grid grid-cols-1 place-items-center gap-2 w-30%">
        <h1 className="text-8 text-brand-dark text-center">Log in or Sign up</h1>
        <p className="text-4 text-center text-brand-litedark mb-4 w-80%">Join millions of others in sharing successful moves on HelpMeOut.</p>
        <button className="w-full p-2.5 border border-1 outline-none rounded-md bg-brand-white text-3.5 font-600 flex items-center justify-center cursor-pointer"> <img src="./img/Google svg.png" alt=""  className="mr-2 w-5"/>Continue with Google</button>
        <button className="w-full p-2.5 border border-1 outline-none rounded-md bg-brand-white text-3.5 font-600 flex items-center justify-center cursor-pointer"><img src="./img/Facebook svg.png" alt="" className="mr-2 w-5" />Continue with Facebook</button>

        <div className="my-4 flex items-center justify-center w-full">
            <hr className="w-50% border-solid border-brand-litegrey h-0" />
            <p className="mx-2">or</p>
            <hr className="w-50% border-solid border-brand-litegrey h-0" />
        </div>


        <form action="" className="w-full grid grid-cols-1 gap-4">
          <label htmlFor="" className="grid grid-cols-1 gap-1 [&>input]:p-2.5 [&>input]:rounded-md [&>input]:outline-none [&>input]:border-brand-litegrey [&>input]:border-solid">
            Email
            <input type="email" placeholder="Enter your email address" />
          </label>

          <label htmlFor="" className="grid grid-cols-1 gap-1 [&>input]:p-2.5 [&>input]:rounded-md [&>input]:outline-none [&>input]:border-brand-litegrey [&>input]:border-solid">
            Password
            <input type="password" placeholder="Enter your Password" />
          </label>

          <Link to="/VideosRepo" className="p-2.5 border-solid border-brand-blue rounded-md bg-brand-blue text-4 text-brand-white text-center decoration-none cursor-pointer hover-bg-brand-bluedark transition-all">Sign Up</Link>
        </form>
      </section>
    </main>
  );
};

export default GetStarted;
