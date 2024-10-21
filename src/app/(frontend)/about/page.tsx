import React from "react";
import type { Metadata } from "next";
import Loading from "../loading";
import Magazine from "@/components/frontend/about/magazine";
import ClientInfo from "@/components/frontend/about/clientInfo";

import { getAboutData } from "../../../../actions/about/get-about";

export const metadata: Metadata = {
  title: "About",
};

export const revalidate = 10;

export type TAbout = {
  _id: string;
  bio: null | string;
  designation: null | string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  status: string;
  role: string;
  gallery: string[];
};

async function Page() {
  let aboutData;
  try {
    const response = await getAboutData();
    aboutData = (await response.data) as TAbout;
  } catch (error) {}
  if (!aboutData) {
    return <Loading />;
  }

  console.log(aboutData);

  return (
    <div className="container">
      <ClientInfo about={aboutData} />
      <Magazine images={aboutData?.gallery} />
    </div>
  );
}

export default Page;
