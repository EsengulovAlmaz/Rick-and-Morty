import Image from "next/image";
import React from "react";

import { header_icon } from "@/assets/images";

const Header = () => (
  <header className="flex items-center gap-4 bg-[#88e23b] text-[#043c6e] px-8 py-3">
    <Image 
      src={header_icon}
      alt="icon"
      width={70}
      height={70}
    />

    <h1 className="font-bold text-3xl sm:text-5xl">
      Rick and Morty
    </h1>
  </header>
);

export default Header;