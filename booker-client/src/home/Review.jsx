import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

//react icons
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import proPic from "../assets/profile.jpg";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 loading-snug">
        Our Customers
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border ">
            <div className="space-x-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-5">See what books your friends are reading.
Track the books you are reading, have read, and want to read.
Check out your personalized book recommendations. Our recommendation engine analyzes 20 billion data points to give suggestions tailored to your literary tastes.</p>
                <Avatar
                  alt="avatar of Jesa"
                  img={proPic}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border ">
            <div className="space-x-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
              <p className="mb-5">See what books your friends are reading.
Track the books you are reading, have read, and want to read.
Check out your personalized book recommendations. Our recommendation engine analyzes 20 billion data points to give suggestions tailored to your literary tastes.</p>
                <Avatar
                  alt="avatar of Jesa"
                  img={proPic}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border ">
            <div className="space-x-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
              <p className="mb-5">See what books your friends are reading.
Track the books you are reading, have read, and want to read.
Check out your personalized book recommendations. Our recommendation engine analyzes 20 billion data points to give suggestions tailored to your literary tastes.</p>
                <Avatar
                  alt="avatar of Jesa"
                  img={proPic}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border ">
            <div className="space-x-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
              <p className="mb-5">See what books your friends are reading.
Track the books you are reading, have read, and want to read.
Check out your personalized book recommendations. Our recommendation engine analyzes 20 billion data points to give suggestions tailored to your literary tastes.</p>
                <Avatar
                  alt="avatar of Jesa"
                  img={proPic}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
