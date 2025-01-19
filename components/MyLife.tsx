import Image from "next/image";
import React from "react";

function MyLife() {
  return (
    <div id="life" className="mx-auto  md:px-20 w-full">
      <div className="md:flex hidden">
        <div className="flex- flex-col">
          <div className="pb-2 hover:opacity-75 transition-all duration-300 ease-linear ">
            <Image className="" src={"/img2.jpg"} alt="img1" width={1000} height={1000} />
          </div>

          <div className="flex gap-2">
            <div className="pb-2 hover:opacity-75 transition-all duration-300 ease-linear ">
              <Image src={"/img5.jpg"} alt="img1" width={1000} height={1000} />
            </div>

            <div className="pb-2 hover:opacity-75 transition-all duration-300 ease-linear ">
              <Image src={"/img6.jpg"} alt="img1" width={1000} height={1000} />
            </div>
          </div>
        </div>

        {/* middle div */}
        <div className="flex flex-col">
          <div className="px-2 hover:opacity-75 transition-all duration-300 ease-linear">
            <Image src={"/img1.jpg"} alt="img1" width={1000} height={1000} />
          </div>
          <div className="p-2  hover:opacity-75 transition-all duration-300 ease-linear">
            <Image src={"/img7.jpg"} alt="img1" width={1000} height={1000} />
          </div>

          <div className="px-2 hover:opacity-75 transition-all duration-300 ease-linear">
            <Image src={"/img3.jpg"} alt="img1" width={1000} height={1000} />
          </div>
        </div>
        {/*  */}

        <div className="flex- flex-col">
          <div className="flex gap-2">
            <div className="pb-2 hover:opacity-75 transition-all duration-300 ease-linear ">
              <Image src={"/img4.jpg"} alt="img1" width={1000} height={1000} />
            </div>

            <div className="pb-2 hover:opacity-75 transition-all duration-300 ease-linear ">
              <Image src={"/img3.jpg"} alt="img1" width={1000} height={1000} />
            </div>
          </div>

          <div className="pt-2 hover:opacity-75 transition-all duration-300 ease-linear">
            <Image src={"/img8.jpg"} alt="img1" width={1000} height={1000} />
          </div>
        </div>
      </div>

      <div className="md:hidden flex">
        <div className="grid grid-cols-2 gap-3">
          <div className="">
            <Image src={"/img4.jpg"} alt="img1" width={1000} height={1000} />
          </div>

          <div className="">
            <Image src={"/img3.jpg"} alt="img1" width={1000} height={1000} />
          </div>

          <div className="">
            <Image src={"/img1.jpg"} alt="img1" width={1000} height={1000} />
          </div>

          <div className="">
            <Image src={"/img8.jpg"} alt="img1" width={1000} height={1000} />
          </div>

          <div className="">
            <Image src={"/img2.jpg"} alt="img1" width={1000} height={1000} />
          </div>

          <div className="">
            <Image src={"/img7.jpg"} alt="img1" width={1000} height={1000} />
          </div>

          <div className="">
            <Image src={"/img5.jpg"} alt="img1" width={1000} height={1000} />
          </div>

          <div className="">
            <Image src={"/img6.jpg"} alt="img1" width={1000} height={1000} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyLife;
