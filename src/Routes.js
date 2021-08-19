import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/educations/Education";
import Experiences from "./components/pages/Experiences";
import Home from "./components/pages/Home";
import SkillsPage from "./components/pages/SkillsPage";
import Works from "./components/pages/Works";
import Slider from "./components/Slider";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />;
        <Route path="/Slider" exact component={Slider} />;
        <Route path="/About" exact component={About} />;
        <Route path="/Skills" exact component={SkillsPage} />;
        <Route path="/educations" exact component={Education} />;
        <Route path="/Works" exact component={Works} />;
        <Route path="/experiences" exact component={Experiences} />;
        <Route path="/Contact" exact component={Contact} />;
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
