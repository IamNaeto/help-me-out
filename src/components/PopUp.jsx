import { Link } from "react-router-dom";

const PopUp = ({ onClose }) => {
  return (
    <main className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <section className="relative w-80% md:w-60% lg:w-40% xl:w-30% bg-white p-5 rounded-md shadow-md">
        <div className="absolute top-3 right-3">
          <span
            className="py-1 px-2.5 rounded-20 border-solid border-1.5 border-brand-litedark cursor-pointer"
            onClick={onClose}
          >
            x
          </span>
        </div>

        <div className="mb-6 flex flex-col items-center justify-center text-center">
          <div className="w-full grid grid-cols-1 place-items-center justify-center">
            <img src="./img/success-kite.png" alt="" className="w-60% mx-auto" />
          </div>
          <p>Your video link has been sent to <span className="color-brand-blue font-bold">johnmark@gmail.com</span></p>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <p>Would you need to view this video later? Save it to your account now!</p>
          <button className="py-3 px-4 bg-brand-blue text-brand-white text-4 rounded-md border-solid border-brand-blue outline-none my-4 cursor-pointer">Save Video</button>
          <p className="text-brand-litedark text-3.5 xs:text-5">Don’t have an account? <Link to="/Auth" className="text-brand-blue">Create account</Link></p>
        </div>
      </section>
    </main>
  );
}

export default PopUp;
