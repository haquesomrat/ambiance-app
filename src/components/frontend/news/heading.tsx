"use client";
import Image from "next/image";
import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';

function Heading() {
  return (
    <div className="flex flex-col justify-center text-center items-center font-semibold tracking-[2px] lg:pt-20 pt-7 lg:pb-10 pb-5 leading-7 text-lightText">
      <h1 className="header font-palatino text-xl lg:tracking-[5px] tracking-widest uppercase">
      Modern Interior Trends
      </h1>
      <p className="semi-header pt-2 font-dipotic text-xl font-medium">
      Transform your space with elegance.
      </p>
      <div className="flex justify-center p-8 ">
        <Image width="80" height="10" src="/divider.png" alt="divder" />
      </div>
    </div>
  );
}

export default Heading;
