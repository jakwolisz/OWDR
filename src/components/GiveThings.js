import React from "react";
import HomeContact from "./HomeContact";
import GiveThingsOut from "./GiveThingsOut";
import GiveHeader from "./GiveHeader";

const GiveThings = () => {

  return (
    <>
    <section id="give_header">
    <GiveHeader />
    </section>
     <section id="give_things">
     <GiveThingsOut />
     </section>     
     <section id="contact">
       <HomeContact />
     </section>
    </>
  );
};

export default GiveThings;
