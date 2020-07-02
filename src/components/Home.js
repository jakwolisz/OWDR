import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAboutUs from "./HomeAboutUs";

const Home = () => {

  return (
    <>
    <section className="header">
    <HomeHeader />
    </section>
     <section id="three_columns">
     <HomeThreeColumns />
     </section>
     <section id="simple_steps">
       <HomeSimpleSteps />
     </section>
     <section id="about_us">
       <HomeAboutUs />
     </section>
    </>
  );
};

export default Home;
