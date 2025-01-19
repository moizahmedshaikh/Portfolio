import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsSnapchat, BsTwitter, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <footer id="follow" className="text-white  mx-auto md:px-20 md:py-20 ">
      {/* Second Part */}
      <div className="bg-[#5d1ff2] lg:px-10 xl:px-40 py-12 ">
        <h1 className="text-center  tracking-wider heading text-6xl font-semibold">
          NEVER MISS A THING
        </h1>
        <div>
          <ul className="flex justify-center gap-x-9 my-6  items-center">
            <li><BsYoutube/></li>
            <li><BsSnapchat/></li>
            <li><BsInstagram/></li>
            <li><BsTwitter/></li>
            <li><BsFacebook/></li>
          </ul>
        </div>

        {/* first div */}
        <div className="flex my-10 justify-evenly lg:flex-row flex-col gap-4  items-stretch">
          <div className="md:text-start text-center ">
            <h1 className="text-3xl heading font-[600]">
              {"I'D LOVE TO HEAR FROM YOU"}
            </h1>
            <div className="my-7  leading-8">
              <h3 className="text-[18px] heading font-[600] tracking-[0.2em]">
                PR & MANAGEMENT
              </h3>
              <p className="text-[13px] tracking-widest">
                <Link href={"#"}>info@mysite.com</Link>
              </p>
            </div>
            <div className="my-7 leading-8">
              <h1 className="text-[18px] heading font-[600] tracking-[0.2em]">FOR BUSINESS INQUIRIES</h1>
              <p className="text-[13px] tracking-widest">
                <Link href={"#"}>info@mysite.com</Link>
              </p>
            </div>
            <p className="text-[13px] md:block hidden tracking-widest">
              © 2035 by Ashley. Powered and secured by Wix
            </p>
          </div>

            <form className="flex flex-col bg-[#5d1ff2] px-6">
              <div className="lg:flex  justify-center items-end gap-x-6 my-2">
                <div className="flex flex-col">
                  <label className="text-[14px]">First Name *</label>
                  <input className=" bg-[#5d1ff2] my-1 border px-3 py-1" type="text" />
                </div>
                <div className="flex flex-col">
                  <label className="text-[14px]">Last Name *</label>
                  <input className=" bg-[#5d1ff2] my-1 border px-3 py-1" type="text" />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[14px]">Email *</label>
                <input className="my-2 bg-[#5d1ff2] border px-3 py-1" type="text" />
              </div>


              <div className="flex flex-col">
                <label className="text-[14px]">Type your message here</label>
                <textarea  className="my-2 bg-[#5d1ff2] border px-3 py-1"rows={5}></textarea>
              </div>

              <div className="flex justify-center items-center py-8">
              <button className="hover:bg-gray-700 transition px-12 py-2 rounded-sm duration-300 text-white">Submit </button>
              </div>
            </form>

            <p className="text-sm md:hidden block text-center  tracking-widest">
              © 2035 by Ashley. Powered and <br /> secured by Wix
            </p>
          </div>
        </div>
      </footer>
  );
}

export default Footer;