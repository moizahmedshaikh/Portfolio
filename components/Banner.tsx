"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaSnapchat, FaTwitter, FaYoutube } from "react-icons/fa6";


function Banner() {
 
  return (
    <div className="text-white text-start md:px-20  md:pt-20 ">


      <div className="md:fixed z-50  left-14 top-52 bg-[#5D1FF2]  flex md:flex-col justify-evenly items-center px-[14px] md:space-y-4 md:py-5 py-3">
        <Link href={"#"} className="text-white">
          <FaYoutube size={20}/>
        </Link>
        <Link href={"#"} className="text-white">
          <FaSnapchat size={20}/>
        </Link>
        <Link href={"#"} className="text-white">
          <FaInstagram size={20}/>
        </Link>
        <Link href={"#"} className="text-white">
          <FaTwitter size={20}/>
        </Link>
        <Link href={"#"} className="text-white">
          <FaFacebook size={20}/>
        </Link>
        
        
      </div>
      <div className="hero h-[65vh] md:h-[120vh] custom-img bg-fixed bg-cover bg-no-repeat">
        <div className="hero-overlay bg-opacity-30"></div>

        <div className="flex h-[50vh] md:h-screen justify-end pb-6  flex-col items-center text-center">
          <div className="">
            <h1 className=" scroll-m-20 font-[900] text-[75px] sm:text-[90px] md:text-[160px] tracking-wider text-white  text-myWhite">
              ASHLEY
              <hr className="h-[2px] bg-white" />
            </h1>
          </div>
          <p className="py-4 scroll-m-20 md:text-2xl text-[20px] font-semibold tracking-wider text-myWhite">
            Vlogging About Beauty, Fashion, Life Hacks & My Life!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
