import React from "react";
import type { Metadata } from "next";
import AccordionComponent from "@/components/frontend/getStarted/accordion";
import { getAllFaq } from "../../../../actions/faq/get-all-faq";

export const metadata: Metadata = {
  title: "Get Started",
};

export interface TFaq {
  _id: string;
  title: string;
  description: string;
  created_by: {
    _id: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

async function Page() {
  let faqData;
  try {
    const response = await getAllFaq();
    faqData = response.data as TFaq[];
  } catch (error) {}
  return (
    <div className="container">
      <h1 className="header font-palatino text-lightText text-[24px] tracking-[5px] text-center py-5">
        F.A.Q
      </h1>
      <AccordionComponent faqData={faqData!} />
    </div>
  );
}

export default Page;
