import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeContact from "./HomeContact";
import HomeWhoWeHelp from "./HomeWhoWeHelp";


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
     <section id="help">
       <HomeWhoWeHelp />
     </section>
     <section id="contact">
       <HomeContact />
     </section>
    </>
  );
};

export default Home;
