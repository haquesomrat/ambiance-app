import React from "react";
import type { Metadata } from "next";
import { getOptionsByName } from "../../../../actions/options/get-options-byname";
import { TOptions } from "../contact/page";

export const metadata: Metadata = {
  title: "Privacy Information",
};

async function Page() {
  let privacyInformation;
  try {
    const response = await getOptionsByName("privacy-policy");
    privacyInformation = response?.data as TOptions;
  } catch (error) {}

  return (
    <article
      className="container prose max-w-none prose-headings:text-lightText prose-headings:font-normal prose-headings:uppercase mx-auto lg:px-48 text-justify text-[16px] [text-align-last:center] font-openSans leading-8 tracking-[2px] font-semibold text-lightText opacity-80 px-10"
      dangerouslySetInnerHTML={{ __html: privacyInformation?.value || "" }}
    ></article>
  );
}

export default Page;
