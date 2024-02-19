import React from "react";
import { FaBookJournalWhills } from "react-icons/fa6";
import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24  flex items-center bg-emerald-200">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/*left side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-4xl font-bold loading-snug text-black">
            Wanna a <FaBookJournalWhills className="inline-block"/> Book get on Bookers <span className=" text-purple-600">for the Best prices</span>
          </h2>
          <p className="md:w-4/5">
            You’re in the right place. Tell us what titles or genres you’ve
            enjoyed in the past, and we’ll give you surprisingly insightful
            recommendations.
          </p>
          <div>
            <input type="search" name="search" id="search" placeholder="  Search Book you want" className="py-2  px-4 rounded-sm outline-none"/>
           <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in rounded-sm duration-200 ">search</button>
          </div>
        </div>

        {/*Right side */}
        <div>
          <BannerCard/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
