"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { generateImage } from "@/lib/utils";

export interface TProject {
  _id: string;
  title: string;
  url: string;
  subject: string;
  skills: string[];
  description: string;
  images: string[];
  created_by: {
    _id: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  createdAt: string;
  updatedAt: string;
}


function PortfolioGallery({ projects }: { projects: TProject[] }) {
  if(projects?.length<1){
    return (<></>);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      <div className=" grid md:grid-cols-2 gap-0 md:gap-4 grid-cols-1 lg:px-32 px-0">
        {projects?.map((data) => (
          <div
            key={data?._id}
            className="flex flex-col justify-center items-center text-center"
          >
            <Link
              href={`/portfolio/${data?._id}`}
              className="pb-5 aspect-4/3 lg:w-[90%] w-full inline-block overflow-hidden"
            >
              <Image
                src={generateImage(data?.images[0])}
                width="580"
                height="580"
                alt="award"
                className="w-full h-full object-cover"
              />
            </Link>
            <Link
              href={`/portfolio/${data?._id}`}
              className="font-palatino text-lg tracking-[5px] opacity-70 hover:opacity-90 transition-all ease-in-out duration-200 pb-10 uppercase"
            >
              {data?.title}
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default PortfolioGallery;
