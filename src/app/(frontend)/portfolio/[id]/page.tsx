import LinkOverLogo from "@/components/frontend/linkOverLogo";
import ImagePreviewer from "@/components/frontend/portfolio/imagePreviewer";
import { ParamsType } from "@/types/types";
import Image from "next/image";
import React from "react";
import { getSingleProjects } from "../../../../../actions/project/get-project";
import { TProject } from "@/components/frontend/portfolio/portfolioGallery";

async function PortfolioId({ params }: { params: ParamsType }) {
  // Find the portfolio item based on the id from params
  let projects;
  try {
    const response = await getSingleProjects(params.id!);
    projects = response?.data as TProject;
  } catch (error) {}

  return (
    <div className="container">
      <div className="py-5">
        <LinkOverLogo link="/portfolio" linkHeader="BACK TO GALLERIES" />
      </div>
      <h1 className="header text-center text-lightText font-palatino text-[17px] tracking-[5px] uppercase">
        {projects?.title}
      </h1>
      <div className="flex justify-center">
        <p className="text-center w-[50%] my-2">{projects?.description}</p>
      </div>
      <div className="flex justify-center p-8 mb-10">
        <Image width="80" height="10" src="/divider.png" alt="divider" />
      </div>
      <ImagePreviewer images={projects!.images} />
      <div className="py-5">
        <LinkOverLogo link="/portfolio" linkHeader="BACK TO GALLERIES" />
      </div>
    </div>
  );
}

export default PortfolioId;
