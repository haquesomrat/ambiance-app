import React from "react";
import type { Metadata } from "next";
import ContactBox from "@/components/frontend/contact/contactBox";
import Form from "@/components/frontend/contact/form";
import Image from "next/image";

export type TOptions = {
  _id: string;
  name: string;
  value: string;
  created_by: {
    _id: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  createdAt: string;
  updatedAt: string;
};

export const metadata: Metadata = {
  title: "Contact",
};

async function Page() {
  return (
    <div className="container">
      <Image
        className="select-none w-full h-full"
        draggable={false}
        src={"/uploads/slider/slider.png"}
        alt="slider-1"
        width="2000"
        height="2000"
      />
      <div className="lg:flex justify-between items-start min-w-[59.6%] gap-5 pt-3">
        <ContactBox />
        <Form />
      </div>
    </div>
  );
}

export default Page;
