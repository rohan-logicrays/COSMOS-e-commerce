import React, { useEffect, useState } from "react";
import TRUCK from "../assets/truck.gif";
import { useNavigate } from "react-router-dom";
import Loader from './Laoder'

const ThankYouModal = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();
  const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
   setTimeout(() => {
    setIsLoading(false)
   }, 2000);
  }, []);
  return (
    <>
      {showModal ? (
        <>
           {isLoading?<Loader /> :<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">COSMOS</h3>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-loose">
                      "Thank You for Shopping with Cosmos! Your order has been
                      successfully placed. We appreciate your business and look
                      forward to serving you again in the future."
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                    <img src={TRUCK} alt="" className=" " />
                    <button
                      className="text-white bg-black font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-gray-800"
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        navigate("/");
                      }}
                    >
                      Shop More
                    </button>
                  </div>
                </div>
              </div>
            </div>}
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
         
        </>
      ) : null}
    </>
  );
};

export default ThankYouModal;
