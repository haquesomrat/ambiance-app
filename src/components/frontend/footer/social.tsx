"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { socialIcons } from "../contact/contactBox";
import { getSocialOptions } from "../../../../actions/social/get-social-options";

export type TSocialOption = {
  _id: string;
  name: string;
  url: string;
  created_by: {
    _id: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  createdAt: string;
  updatedAt: string;
};

function Social({ className }: { className?: string }) {
  const [social, setSocial] = useState<TSocialOption[] | []>([]);
  useEffect(() => {
    const getOptionsData = async () => {
      try {
        const { data } = await getSocialOptions();
        setSocial(data);
      } catch (error) {}
    };
    getOptionsData();
  }, []);


  return (
    <div
      className={`flex justify-center items-center gap-5 pt-3 px-5 ${className}`}
    >
      {social?.map((item: TSocialOption) => (
        <Link key={item.name} className="icon-link" href={`${item?.url}`}>
          {["Facebook", "Instagram", "Google Business", "LinkedIn", "Pinterest", "Twitter"].includes(item.name) && (
    item.name === "Facebook"
        ? socialIcons.facebook
        : item.name === "Instagram"
        ? socialIcons.instagram
        : item.name === "Google Business"
        ? socialIcons.googleBusiness
        : item.name === "LinkedIn"
        ? socialIcons.linkedin
        : item.name === "Pinterest"
        ? socialIcons.pinterest
        : item.name === "Twitter"
        ? socialIcons.twitter
        : null
)}
        </Link>
      ))}
    </div>
  );
}

export default Social;
