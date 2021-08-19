import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import About from "../About";
import Contact from "../Contact";
import Education from "../educations/Education";
import Experience from "../experiences/Experience";
import { Provider } from "../Layout";
import Periodic from "../periodicTable/Periodic";
import Skills from "../Skills";
import Slider from "../Slider";
import Work from "../works/Work";


const Home = () => {
  return (
    <Provider history={useHistory()}>
      <Slider />
      <About />
      <Periodic />
      <Education />
      <Work dataParentToChild = {"home"}/>
      <Experience dataParentToChild = {"home"}/>
      <Contact />
    </Provider>
  );
};

export default Home;
