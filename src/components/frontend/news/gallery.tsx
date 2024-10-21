/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PaginationControls from "../paginationControl";
import { motion } from "framer-motion";
import { generateImage } from "@/lib/utils";

export type TNews = {
  _id: string;
  title: string;
  images: string[];
  banner: string;
  subtitle: string;
  description: string;
  created_by: {
    _id:string;
    first_name:string;
    last_name:string;
    avatar:string;
  };
  createdAt: string;
  updatedAt: string;
};

export type TGallery = {
  searchParams: { [key: string]: string | string[] | undefined };
  news: TNews[];
};

function Gallery({ searchParams, news }: TGallery) {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "6";
  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 7, 14 ...
  const end = start + Number(per_page); // 7, 14, 21 ...
  const entries = news?.slice(start, end);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div
        id="gallery"
        className="flex flex-wrap justify-center items-start lg:px-5"
      >
        {entries?.map((data: TNews) => (
          <Link
            href={`/news/${data?._id}`}
            key={data?._id}
            className="flex flex-col md:w-1/3 w-full md:px-5 px-0"
          >
            <div className="pb-5 aspect-4/3 w-auto overflow-hidden">
              <Image
                src={generateImage(data?.banner)}
                width="320"
                height="220"
                alt={data?.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pb-10 w-full ">
              <h1 className="font-palatino text-lg text-start tracking-[5px] opacity-70 hover:opacity-90 transition-all ease-in-out duration-200  uppercase mb-2">
                {data?.title}
              </h1>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    data.description.length > 100
                      ? `${data.description.slice(0, 100)}...`
                      : data.description,
                }}
              ></p>
            </div>
          </Link>
        ))}
      </div>
      {news && news?.length <= 6 ? (
        <></>
      ) : (
        <div className="flex justify-center pt-10">
          <PaginationControls
            hasNextPage={end < (news?.length || 0)}
            hasPrevPage={start > 0}
            totalData={news?.length || 0}
            route={"news"}
          />
        </div>
      )}
      <div />
    </motion.div>
  );
}

export default Gallery;
