"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <>
      <div className="md:fixed z-50  heading w-full md:px-20 px-8  mx-auto">
        <div className="py-7 flex justify-between items-center">
          <h1 className="text-4xl font-[600]">Ashley</h1>

          <ul className="md:flex  hidden text-xl tracking-wider font-[600] justify-center gap-x-7 items-center">
            <Link
              href={"#home"}
              className="hover:text-[#5d1ff2] transition-all ease-linear duration-300 cursor-pointer"
            >
              Home
            </Link>
            <Link
              href={"#vlog"}
              className="hover:text-[#5d1ff2] transition-all ease-linear duration-300 cursor-pointer"
            >
              My Vlog
            </Link>
            <Link
              href={"#story"}
              className="hover:text-[#5d1ff2] transition-all ease-linear duration-300 cursor-pointer"
            >
              My Story
            </Link>
            <Link
              href={"#life"}
              className="hover:text-[#5d1ff2] transition-all ease-linear duration-300 cursor-pointer"
            >
              My Life
            </Link>
            <Link
              href={"#follow"}
              className="hover:text-[#5d1ff2] transition-all ease-linear duration-300 cursor-pointer"
            >
              Follow Me
            </Link>
          </ul>
          <div onClick={showNavHandler} className=" right-2 md:hidden ">
            <CgMenu size={30} />
          </div>
        </div>
      </div>

      <div className="w-full border-[0.3px] border-[#00000073] opacity-[30%]"></div>
      <div className="lg:hidden">
        <div
          className={`fixed ${navOpen} transform transition-all duration-500  inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
        >
          {/* Nav Links */}
        </div>
        <div
          className={`top-0 fixed ${navOpen} transform transition-all duration-500 delay-300 flex
           justify-start flex-col h-screen w-[80%] pt-40 sm:w-[60%]  bg-[#ffffff] z-[10000] space-y-6`}
        >
          <ul className=" flex flex-col items-start px-4 font-bold text-xl gap-7 text-black/60  tracking-widest">
            <li className="hover:text-black  transition duration-300 cursor-pointer ">
              <Link
                onClick={closeNavHandler}
                className="p-3  hover:text-[#5d1ff2] transition-all ease-linear duration-300 cursor-pointer"
                href={"#home"}
              >
                HOME
              </Link>
            </li>
            <li className="hover:text-black transition duration-300 cursor-pointer ">
              <Link
                onClick={closeNavHandler}
                className="p-3 hover:text-[#5d1ff2] transition-all ease-linear duration-300 cursor-pointer"
                href={"#vlog"}
              >
                My Vlog
              </Link>
            </li>
            <li className="hover:text-black transition duration-300 cursor-pointer ">
              <Link
                onClick={closeNavHandler}
                className="p-3 hover:text-[#5d1ff2] transition-all ease-linear duration-300 cursor-pointer"
                href={"#story"}
              >
                My Story
              </Link>
            </li>
            <li className="hover:text-black transition duration-300 cursor-pointer ">
              <Link
                onClick={closeNavHandler}
                className="p-3 hover:text-[#5d1ff2] transition-all ease-linear duration-300 cursor-pointer"
                href={"#life"}
              >
                My Life
              </Link>
            </li>
            <li className="hover:text-black transition duration-300 cursor-pointer ">
              <Link
                onClick={closeNavHandler}
                className="p-3 hover:text-[#5d1ff2] transition-all ease-linear duration-300 cursor-pointer"
                href={"#follow"}
              >
                Follow Me
              </Link>
            </li>
          </ul>

          <div
            onClick={closeNavHandler}
            className="absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8 text-black"
          >
            <CgClose />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
