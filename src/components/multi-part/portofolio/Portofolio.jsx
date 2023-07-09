import React from "react";
import Github from "../../../assets/github.jpg";
import Linkedin from "../../../assets/linkedin.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./style.css";

function Portofolio() {
  const router = useRouter();

  const portofolio = [
    {
      name: "Github",
      image: Github,
      link: "https://github.com/AnggiSatria",
    },
    {
      name: "Linkedin",
      image: Linkedin,
      link: "https://www.linkedin.com/in/anggi-satria-a41455207/",
    },
  ];

  return (
    <div
      id="forCard"
      className="w-full h-full flex xl:flex-wrap gap-5 justify-center items-center xl:flex-row md:flex-row flex-col md:items-start md:flex-wrap xl:justify-center "
    >
      {portofolio.map((e) => {
        return (
          <div className="flex flex-col bg-[#ffff] shadow rounded-md w-[285px] xl:h-[350px] md:h-[350px] h-[500px] p-3 gap-2">
            <div
              className="flex xl:flex-col flex-row  w-full h-full  hover:bg-[#f3f3f3] cursor-pointer"
              onClick={() => {
                router.push(e.link);
              }}
            >
              <Image
                className="w-full xl:h-[250px] rounded-md "
                src={e.image}
              />
            </div>
            <label
              htmlFor=""
              className="w-full h-fit text-md font-semibold"
              key={e.name}
            >
              {e.name}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default Portofolio;
