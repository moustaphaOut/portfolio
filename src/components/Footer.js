
import React from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { Provider } from "./Layout";

const Footer = () => {
  return (
  <section className="footer">
  <div className="box-container">
    <div className="box">
      <h3>Moustapha's Portfolio</h3>
      <p>
        Thank you for visiting my personal portfolio website. Connect
        with me over socials. <br /> <br /> Please wait for a while all
        major projects will be listed soon. Till then keep visiting.
        Connect with me over live chat!
      </p>
    </div>
    <div className="box">
      <h3>quick links</h3>
      <Link to="/">
        <i className="fas fa-chevron-circle-right" /> home
      </Link>
      <a href="#about">
        <i className="fas fa-chevron-circle-right" /> about
      </a>
      <Link to="/skills">
        <i className="fas fa-chevron-circle-right" /> skills
      </Link>
      <a href="#education">
        <i className="fas fa-chevron-circle-right" /> education
      </a>
      <Link to="/works">
        <i className="fas fa-chevron-circle-right" /> work
      </Link>
      <Link to="/experiences">
        <i className="fas fa-chevron-circle-right" /> experience
      </Link>
    </div>
    <div className="box">
      <h3>contact info</h3>
      <p>
        {" "}
        <i className="fas fa-phone" />
        +212 697 19 58 69
      </p>
      <p>
        {" "}
        <i className="fas fa-envelope" />
        moustapha.eloutmani@gmail.com
      </p>
      <p>
        {" "}
        <i className="fas fa-map-marked-alt" />
        PAMPLONA 32 P03, MELILLA, SPAIN
      </p>
      <div className="share">
        <a
          href="https://www.linkedin.com/in/moustapha-el-outmani"
          className="fab fa-linkedin"
          target="_blank"
        />
        <a
          href="https://github.com/moustaphaout"
          className="fab fa-github"
          target="_blank"
        />
        <a
          href="mailto:moustapha.eloutmani@gmail.com"
          className="fas fa-envelope"
          target="_blank"
        />
        <a
          href="https://twitter.com/jigar_sab"
          className="fab fa-twitter"
          target="_blank"
        />
        <a
          href="https://t.me/lifecode5"
          className="fab fa-telegram-plane"
          target="_blank"
        />
      </div>
    </div>
  </div>
  <h1 className="credit">
    Designed with <i className="fa fa-heart pulse" /> by{" "}
    <a href="https://www.linkedin.com/in/moustapha-el-outmani/">
      {" "}
      Moustapha El Outmani
    </a>
  </h1>
</section>
  );
};

export default Footer;
