import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import MyLife from "@/components/MyLife";
import Story from "@/components/Story";
import Vlog from "@/components/Vlog";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="w-full">
        <h1 className="heading text-center md:text-6xl text-4xl  md:py-16 sm:py-10 py-7 font-semibold">
          MY VLOG
        </h1>
      </div>
      <Vlog />
      <Story />
      <div className="w-full">
      <h1 className="heading text-center md:text-7xl text-5xl  md:py-16 sm:py-10 py-7 font-semibold">
      #ASHLEY ON INSTA
        </h1>
      </div>
      <MyLife/>
      <Footer/>
    </div>
  );
}
