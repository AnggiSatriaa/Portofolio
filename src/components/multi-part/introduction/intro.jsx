import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Anggi from "../../../assets/IMG_5445.png";
import { useRouter } from "next/navigation";

function Intro() {
  const router = useRouter();

  return (
    <>
      <div className="flex  xl:w-8/12 xl:h-full  flex-col items-end gap-3">
        <div className="flex flex-col w-full min-h-[450px] xl:h-[200px] md:h-[230px]">
          <label className=" self-stretch text-right w-full text-5xl text-[#787777] font-normal leading-[150%]  font-mono ">
            Hi My Name is{" "}
            <span className="text-[#f3f3f3] font-['Yantramanav']">
              Anggi Satria
            </span>
          </label>

          <TypeAnimation
            sequence={[
              "Welcome To My Website",
              1000,
              "I'm Frontend Developer i work on startup company and also use Javascript for Programming Languages",
              1000,
              "I'm Frontend Developer i work on startup company and also use React JS for Library",
              1000,
              "I'm Frontend Developer i work on startup company and also use Next JS as framework",
              1000,
              "I'm Frontend Developer i work on startup company and also use Tailwind CSS for Slicing HTML",
              1000,
              "I have completed bootcamp class in Dumbways.id as Fullstack Developer and had some portfolio",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="inline-block text-4xl text-[#ffff] text-right w-full font-mono"
            //   style={{ fontSize: "2em", display: "inline-block", color: "white" }}
            repeat={Infinity}
          />
        </div>

        <button
          className="w-[120px] h-[40px] border-2 border-white bg-red-800 text-[#ffff] font-semibold not-italic font-mono hover:bg-red-500 hover:text-[#f3f3f3_!important] rounded z-10"
          onClick={() => {
            router.push(
              "https://api.whatsapp.com/send/?phone=0895600414111&text&type=phone_number&app_absent=0"
            );
          }}
        >
          Contact Me
        </button>
      </div>
      <div className="flex   xl:w-3/12 xl:h-full ">
        <div className="flex"></div>
        <Image
          src={Anggi}
          className="w-fit h-full absolute top-[0px] xl:right-8 right-[-20px] opacity-40"
        />
      </div>
    </>
  );
}

export default Intro;
