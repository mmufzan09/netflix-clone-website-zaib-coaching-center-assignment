
import Cartoon from "@/Components/Cartoon.jsx";
import FAQs from "@/Components/FAQs.jsx";
import Mobile from "@/Components/Mobile.jsx";
import Movie from "@/Components/Movie.jsx";
import Tv from "@/Components/Tv.jsx";
import React from "react";

const page = () => {
  return (
    <>
      <main className="bg-img h-screen bg-center  bg-no-repeat bg-cover max-h-[644px] relative border-b-8 border-grey">
        <div className="h-[644px] w-full opacity-[0.69] absolute top-0 bg-black" />
        <div className="font-martel-sans h-[calc(100%-1px)] flex items-center justify-center flex-col text-white relative top-12 gap-6 px-0 py-8">
          <span className="font-poppins font-bold text-[44px] text-center ">
            Enjoy big movies, hit series and more from ₹ 149.
          </span>
          <span className="font-normal  text-center text-[26px] ">
            Join today. Cancel anytime.
          </span>
          <span className="text-center text-[24px]">
            Ready to watch? Enter your email to create or restart your
            membership.
          </span>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Email Address"
              className="bg-transparent border border-[#F6EEEE80] px-10 py-1 rounded outline-none text-[14px] flex item-start"
            />
            <button
              type="button"
              className="border border-white bg-[red] px-8 py-1 rounded text-white text-[18px] "
            >
              Get Started &gt;
            </button>
          </div>
        </div>
      </main>
      <Tv />
      <Mobile />
      <Movie />
      <Cartoon />
      <FAQs/>
      





    </>
  );
};

export default page;


