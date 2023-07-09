import React from "react";

function About() {
  const map = [
    {
      name: "Experience",
    },
    {
      name: "Skills",
    },
    {
      name: "Study",
    },
  ];

  return (
    <div className="w-full h-full p-3 gap-3 flex">
      <label
        htmlFor=""
        className="w-full h-full break-words text-white font-semibold leading-[150%]"
      >
        Hi My Name is Anggi Satria, i worked on start up company as Frontend
        Developer, i was study in Indraprasta University major Informatics
        Engineering 2018 untill now. I have great fundamental for Frontend
        Developer and i was completed class Fullstack Developer in Bootcamp
        Dumbways.id, and i have some portfolio in my github and mini project in
        codesanbox.
        <br />
        <br />I have some experience if you want to know me more lets connect to
        my Linkedin.
      </label>
    </div>
  );
}

export default About;
