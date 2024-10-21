"use client";

import Image from "next/image";
import Link from "next/link";
import { getOptionsByName } from "../../../../actions/options/get-options-byname";
import { useEffect, useState } from "react";
import { TOptions } from "@/app/(frontend)/contact/page";

function ContactInfo({ footer = false }: { footer?: boolean }) {
  const [emailOptions, setEmailOptions] = useState<TOptions | null>(null);
  const [contactOptions, setContactOptions] = useState<TOptions | null>(null);
  useEffect(() => {
    const getOptionsData = async () => {
      try {
        const { data } = await getOptionsByName("contact");
        const { data: emailOptions } = await getOptionsByName("email");
        setContactOptions(data as TOptions);
        setEmailOptions(emailOptions  as TOptions);
      } catch (error) {}
    };
    getOptionsData();
  }, []);
  return (
    <div className="flex flex-col items-center text-center">
      {!footer && (
        <Image
          src={"/images/logo-sm.png"}
          width={70}
          height={100}
          alt="company logo"
          className="mx-4"
        />
      )}
      <h2 className="font-palatino py-1 text-lightText uppercase">
        CONTACT US
      </h2>

      <div className="space-y-2 grid">
        <Link
          className="footer-link-text footer-description"
          href={"#"}
          // href={`tel:+1${phone?.replaceAll("-", "")}`}
        >
          {/* {phone || (
            <div className="w-64 h-10 bg-black/25 animate-pulse rounded"></div>
          )} */}
          {contactOptions?.value || 1 - 817 - 925 - 2478}
        </Link>

        <Link
          className="email-link footer-link-text "
          href={"#"}
          // href={`mailto:${email}`}
        >
          {/* {email || (
            <div className="w-64 h-10 bg-black/25 animate-pulse rounded"></div>
          )} */}
          {emailOptions?.value || "info@ambiancedesigns.biz"}
        </Link>
      </div>
    </div>
  );
}

export default ContactInfo;
