"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "./header";
import { usePathname } from "next/navigation";
import { fakeMenuData } from "@/lib/fake-data";

function Nav() {
  const currentPath = usePathname();

  if (!fakeMenuData) {
    return (
      <div className="animate-pulse">
        <div className="h-10 bg-black/25 rounded col-span-1"></div>
        <div className="flex justify-center items-center py-12">
          <div className="aspect-[220/244] w-55 bg-black/25 rounded col-span-1 my-5"></div>
        </div>
        <div className="container grid grid-cols-5 gap-4 my-10">
          <div className="h-10 bg-black/25 rounded col-span-1"></div>
          <div className="h-10 bg-black/25 rounded col-span-1"></div>
          <div className="h-10 bg-black/25 rounded col-span-1"></div>
          <div className="h-10 bg-black/25 rounded col-span-1"></div>
          <div className="h-10 bg-black/25 rounded col-span-1"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-gray-500">
      <Header navItems={fakeMenuData?.items} />
      <nav className="container mx-auto justify-between font-openSans text-[15px] tracking-widest py-4 lg:flex hidden ">
        {fakeMenuData?.items.map((navItem, i) => (
          <div
            key={i}
            className="group hover:italic cursor-pointer text-center "
          >
            <Link
              className={`${
                currentPath === navItem.link ? "italic" : ""
              } lg:flex lg:flex-col lg:justify-center lg:items-center uppercase`}
              href={navItem.link}
            >
              {navItem.name}
              <Image
                src={"/divider.png"}
                width={70}
                height={100}
                alt="company logo"
                className={`${
                  currentPath === navItem.link ? "visible" : "invisible"
                } group-hover:visible my-1`}
              />
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Nav;
