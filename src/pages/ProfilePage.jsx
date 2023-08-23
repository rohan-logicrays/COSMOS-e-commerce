import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItems from "../components/CartItems";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="bg-gray-800 h-screen">
    <div className="flex items-center  justify-center">
      <div className="p-8 rounded shadow-lg w-[150rem] text-white mt-16 ">
        <h2 className="text-2xl font-semibold mb-4  inline">
          {user ? user.name.toUpperCase() : "User"}'s Profile
        </h2>

        {user ? (
          <div className="grid md:flex justify-between">
            <div className="h-max p-4 shadow-xl bg-slate-300 text-black rounded-lg mt-8">
              <p>Name: {user.name}</p>
              <p>Email: {user.gmail}</p>
              <Link to="/checkout">
                  <button className="mt-8 w-full flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700 ">
                    Checkout
                  </button>
                </Link>
            </div>
           <CartItems />
          </div>
        ) : (
          <p>
            No user data available. Please{" "}
            <Link to="/login" className="text-blue-500 underline">
              Log in.
            </Link>{" "}
          </p>
        )}
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;
