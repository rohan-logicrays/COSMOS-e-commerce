import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";
import MegaMenu from "./MegaMenu";
import { logOut } from "../store/reducers/authSlice";

const Header = ({ handleCartClick, isCartOpen }) => {
  const totalCartQuantity = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isDropdownMenuOpen, setDropdownMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    if (searchQuery) {
      if (event.code === "Enter") {
        navigate(`/search/${searchQuery}`);
      }
    }
  };

  const handleOpenMegaMenu = (name) => {
    setCategoryName(name);
    setIsMegaMenuOpen(true);
  };

  const handleProfileClick = () => {
    setDropdownMenuOpen(false);
    navigate("/profile");
  };
  const handleLogOutClick = () => {
    setDropdownMenuOpen(false);
    dispatch(logOut())
    navigate("/login");
  };
  const handleLoginClick = () => {
    setDropdownMenuOpen(false);
    navigate("/login");
  };
  const handleSignUpClick = () => {
    setDropdownMenuOpen(false);
    navigate("/signup");
  }
  return (
    <>
      <header
        className={`fixed z-10 w-full bg-black p-2 bg-opacity-70 backdrop-blur ${
          isCartOpen ? "blur-[2px] over" : ""
        }`}
      >
        <Fade direction="down" damping={0.6} triggerOnce={true}>
          <div className="relative container mx-auto text-white">
            <nav className="flex flex-col md:flex-row md:items-center md:justify-between ">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link to="/">
                  <div className="text-xl md:mb-0 hover:border-b border-white p-1">
                    COSMOS
                  </div>
                </Link> 

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden text-white"
                  onClick={toggleMobileMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              <ul
                className={`${
                  mobileMenuOpen ? "block" : "hidden"
                } md:flex md:flex-row lg:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center md:ml-4`}
              >
                <li className="border-b flex justify-between">
                  <input
                    type="text"
                    className="bg-transparent focus:outline-none focus:ring-0"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onKeyDown={(e) => handleSearch(e)}
                  />

                  <button
                    className="-mb-1"
                    onClick={() => handleSearch({ code: "Enter" })}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </li>
                <li
                  onMouseEnter={() => handleOpenMegaMenu("Mens")}
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                >
                  <Link
                    to="category/Men"
                    className="hover:border-b border-white p-2"
                  >
                    MEN
                  </Link>
                </li>
                <li
                  onMouseEnter={() => handleOpenMegaMenu("Women")}
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                >
                  <Link
                    to="category/Women"
                    className="hover:border-b border-white p-2"
                  >
                    WOMEN
                  </Link>
                </li>
                <li
                  onMouseEnter={() => handleOpenMegaMenu("Kids")}
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                >
                  <Link
                    to="category/Kids"
                    className="hover:border-b border-white p-2"
                  >
                    KIDS
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/checkout" ? "hidden" : ""
                  }`}
                >
                  {/* Cart Icon */}
                  <span
                    className="hover:border-b border-white p-1 flex  justify-between"
                    onClick={() => {
                      handleCartClick();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                    {totalCartQuantity.length === 0
                      ? ""
                      : " - " + totalCartQuantity.length}
                  </span>
                </li>
                <span onClick={() => setDropdownMenuOpen(!isDropdownMenuOpen)} className="cursor-pointer hover:border-b border-white p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
              </ul>
            </nav>
          </div>
        </Fade>

        <span className={`${isMegaMenuOpen ? "block" : "hidden"} `}>
          <MegaMenu
            categoryName={categoryName}
            setIsMegaMenuOpen={setIsMegaMenuOpen}
          />
        </span>
      </header>
      <div
        className={`${
          isDropdownMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out fixed  right-0 mt-12 text-black bg-white z-10 p-2 border border-r-0`}
      >
        {user ? (
          <>
            {" "}
            <button
              onClick={() => handleProfileClick()}
              className="block px-4 py-2 hover:underline w-full text-left"
              role="menuitem"
            >
              Go to Profile
            </button>
            <button
              onClick={() => handleLogOutClick()}
              className="block px-4 py-2  hover:underline w-full text-left"
              role="menuitem"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            {" "}
            <button
              onClick={() => handleLoginClick()}
              className="block px-4 py-2 hover:underline w-full text-left"
              role="menuitem"
            >
              Log In
            </button>
            <button
              onClick={() => handleSignUpClick()}
              className="block px-4 py-2  hover:underline w-full text-left"
              role="menuitem"
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
