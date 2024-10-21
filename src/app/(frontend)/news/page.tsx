import React from "react";
import type { Metadata } from "next";
import Slider from "@/components/frontend/home/slider";
import Heading from "@/components/frontend/news/heading";
import Gallery from "@/components/frontend/news/gallery";
// import { fakeSliderData } from "@/lib/fake-data";
import { getAllPosts } from "../../../../actions/post/get-posts";
import { getSlider } from "../../../../actions/slider/get-slider";

export const metadata: Metadata = {
  title: "News",
};

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  let posts;
  let slider;

  try {
    const response = await getAllPosts();
    const sliderResponse = await getSlider("post");
    slider = sliderResponse?.data[0] || null;
    posts = response?.data;
  } catch (error) {}

  return (
    <div className="container flex flex-col items-center justify-center pt-5">
      <Slider slider={slider} />
      <Heading />
      <Gallery searchParams={searchParams} news={posts} />
    </div>
  );
};

export default Page;
