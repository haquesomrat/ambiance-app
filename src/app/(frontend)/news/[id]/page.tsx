import Image from "next/image";
import LinkOverLogo from "@/components/frontend/linkOverLogo";
import { ParamsType } from "@/types/types";
import { getSinglePosts } from "../../../../../actions/post/get-post";
import { TNews } from "@/components/frontend/news/gallery";
import { generateImage } from "@/lib/utils";
import moment from "moment";

// Define dummy data

async function NewsId({ params }: { params: ParamsType }) {
  let news;
  try {
    const response = await getSinglePosts(params.id!);
    news = response?.data as TNews;
  } catch (error) {}
  return (
    <div className="container">
      <div className="py-5">
        <LinkOverLogo link="/news" linkHeader="BACK TO News" />
      </div>
      <h1 className="text-lightText lg:text-start text-center font-palatino text-2xl tracking-[5px] uppercase">
        {news?.title}
      </h1>
      <div className="pt-5 flex md:flex-row flex-col md:justify-between items-center text-lightText">
        <p className="capitalize">
          <i>Author:</i>{" "}
          {news?.created_by?.first_name + " " + news?.created_by?.last_name}
        </p>
        <p>
          <i>Date:</i> {moment(news?.createdAt).format("MMMM DD, YYYY")},{" "}
          <i>Time:</i> {moment(news?.createdAt).format("HH:MM")}
        </p>
      </div>
      <div className="flex justify-center bg-black pt-[1px] mb-10"></div>
      <div className="flex justify-center items-center">
        <div className=" lg:w-full object-cover overflow-hidden inline-block">
          <Image
            width={1000}
            height={500}
            alt="News Image"
            src={generateImage(news!.banner)}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <p
        className="mt-10 prose max-w-none prose-headings:text-lightText prose-headings:font-normal prose-headings:uppercase text-justify text-[16px] font-openSans leading-8 tracking-[2px] font-semibold text-lightText opacity-80"
        dangerouslySetInnerHTML={{ __html: news!.description }}
      />
    </div>
  );
}

export default NewsId;
