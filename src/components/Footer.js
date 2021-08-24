import React from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { Provider } from "./Layout";

const Footer = () => {
  const CONTACTS = [
    {
      name: "linkedin",
      icon: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/moustapha-el-outmani",
    },
    {
      name: "github",
      icon: "fab fa-github",
      link: "https://github.com/moustaphaout",
    },
    {
      name: "mail",
      icon: "fas fa-envelope",
      link: "mailto:moustapha.eloutmani@gmail.com",
    },
    {
      name: "whatsapp",
      icon: "fab fa-whatsapp",
      link: "https://api.whatsapp.com/send?phone=212697195869",
    },
    {
      name: "instagram",
      icon: "fab fa-instagram",
      link: "https://instagram.com/moustapha_out",
    },
  ];
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Moustapha's Portfolio</h3>
          <p>
            Thank you for visiting my personal portfolio website. Connect with
            me over socials. <br /> <br /> Please wait for a while all major
            projects will be listed soon. Till then keep visiting.!
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
            {CONTACTS.map((contact) => {
              return (
                <a
                  href={contact.link}
                  className={contact.icon}
                  target="_blank"
                />
              );
            })}
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
