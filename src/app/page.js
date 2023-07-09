"use client";

import View from "@/components/main-view/View";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Introduction");

  const renderActive = (value) => {
    if (value === "Introduction") {
      return setActive(value);
    } else if (value === "Portfolio") {
      return setActive(value);
    } else if (value === "About Me") {
      return setActive(value);
    } else if (value === "Contact Information") {
      return setActive(value);
    }
  };

  // ${
  //   active === "Introduction" ? "justify-end" : ""
  // }

  return (
    <main className="w-full min-h-[720px] md:h-screen h-fit relative bg-gradient-to-tr from-black via-black to-red-700 flex flex-col">
      <Navbar
        renderActive={renderActive}
        active={active}
        setActive={setActive}
      />
      <div
        className={`flex w-[95%] min:h-5/6 h-screen mx-auto mt-5 xl:flex-row flex-col  
     
        `}
      >
        <View active={active} />
      </div>
    </main>
  );
}
