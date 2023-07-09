import React from "react";
import Intro from "../multi-part/introduction/intro";
import Portofolio from "../multi-part/portofolio/Portofolio";
import About from "../multi-part/about/about";
import Contact from "../multi-part/contact/contact";

function View({ active }) {
  //   return <div>View</div>;
  switch (active) {
    case "Introduction":
      return <Intro />;
    case "Portfolio":
      return <Portofolio />;
    case "About Me":
      return <About />;
    case "Contact Information":
      return <Contact />;
  }
}

export default View;
