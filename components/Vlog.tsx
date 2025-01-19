

function Vlog() {
  return (
    <div id="vlog" className="w-full mx-auto md:px-20">
      <div className="bg-[#F1F1F1]">
        <div className="w-full mx-auto">
          {/* Video Container with Top Border Only */}
          <div className="md:max-w-[700px] w-full mx-auto relative">
            <div className="absolute top-0 left-0 w-full h-full border-t-[20px] 
            border-b-[20px] border-gray-900 md:border-[20px] md:border-[#5D1FF2] pointer-events-none"></div>
            <video muted controls src="/vedio1.mp4" className="w-full">
              moiz
            </video>
          </div>
        </div>

        <div className="md:w-[700px] hidden md:block mx-auto my-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search Here"
            className="w-full bg-gray-100 px-3 placeholder:text-xs placeholder:text-gray-500"
          />
        </div>

        <div className="md:grid  hidden grid-cols-4 max-w-[700px] mx-auto gap-2">
          <div>
            <video muted src="/vedio1.mp4" className="w-full"></video>
            <p className="text-sm">Trends to Try Now!</p>
          </div>

          <div>
            <video muted src="/vedio1.mp4" className="w-full"></video>
            <p className="text-sm">ALien Attack</p>
          </div>

          <div>
            <video muted src="/vedio1.mp4" className="w-full"></video>
            <p className="text-sm">the Natural Look</p>
          </div>

          <div>
            <video muted src="/vedio1.mp4" className="w-full"></video>
            <p className="text-sm">Perfect Valentine Makeup</p>
          </div>
        </div>
        <div className="flex justify-center md:py-14 py-7">
          <button className="px-5 py-3  text-sm text-white bg-[#5D1FF2]">
            For More Videos
          </button>
        </div>
      </div>
    </div>
  );
}

export default Vlog;
