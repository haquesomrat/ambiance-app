import React from "react";
import type { Metadata } from "next";
import { getOptionsByName } from "../../../../actions/options/get-options-byname";
import { TOptions } from "../contact/page";

// dummyTermData.ts

export const metadata: Metadata = {
  title: "Terms of Services",
};

async function Page() {
  let termsAndCondition;
  try {
    const response = await getOptionsByName("terms-conditions");
    termsAndCondition = response?.data as TOptions;
  } catch (error) {}
  return (
    <div className="container mx-auto text-justify text-[16px] [text-align-last:center] font-openSans leading-8 tracking-[2px] font-semibold text-lightText opacity-80">
      {/* TERMS AND CONDITIONS  */}
      <article
        className="prose max-w-none prose-headings:text-lightText prose-headings:font-normal prose-headings:uppercase"
        dangerouslySetInnerHTML={{ __html: termsAndCondition?.value || "" }}
      ></article>
    </div>
  );
}

export default Page;
