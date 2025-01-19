import Image from "next/image";
import React from "react";

function Story() {
  return (
    <div id="story" className="mx-auto  lg:px-20 w-full flex lg:flex-row flex-col justify-center items-center pt-8 md:pt-14 ">
      <div className="lg:w-[50%] w-full flex text-center lg:text-start lg:px-0 px-8 py-6 justify-center items-center  md:border-none border-b-[14px] border-[#5D1FF2]">
        <div className="lg:max-w-72 md:max-w-96 w-full  ">
          <h1 className=" heading md:text-6xl tracking-wider text-4xl font-[600] py-4 ">
            THIS IS MY
             STORY
          </h1>
          <p className="sm:text-[14px] text-lg text-[#7c7c7c] leading-6">
            I'm a paragraph. Click here to add your own text and edit me.
            It&apos;s easy. Just click “Edit Text” or double click me to add
            your own content and make changes to the font. Feel free to drag and
            drop me anywhere you like on your page.
          </p>{" "}
          <br />
          <p className="sm:text-[14px] text-lg text-[#7c7c7c] leading-6 mb-3">
            This is a great space to write long text about your company and your
            services. You can use this space to go into a little more detail
            about your company. Talk about your team and what services you
            provide.
          </p>
          <button className="md:px-4 px-7  text-[17px] py-3 rounded-sm mt-3 text-sm text-white bg-[#5D1FF2]">
            Follow Me
          </button>
        </div>
      </div>

      <div className="lg:w-[50%]  w-full border-[#5D1FF2] lg:border-l-[22px] h-[80vh]  img bg-fixed lg:bg-contain lg:bg-right bg-center bg-cover  bg-no-repeat">
        <div className="hero-overlay bg-opacity-30"></div>

        {/* <Image
          alt="story img"
          src={"/banner2.png"}
          className="w-100%]"
          width={1000}
          height={1000}
          /> */}
      </div>
    </div>
  );
}

export default Story;
