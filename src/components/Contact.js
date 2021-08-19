import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        <i className="fas fa-headset" /> Get in <span>Touch</span>
      </h2>
      <div className="container">
        <div className="content">
          <div className="image-box">
            <img draggable="false" src="./assests/images/contact1.png" alt="" />
          </div>
          <form action="#">
            <div className="form-group">
              <div className="field">
                <input type="text" name="name" placeholder="Name" required />
                <i className="fas fa-user" />
              </div>
              <div className="field">
                <input type="text" name="email" placeholder="Email" required />
                <i className="fas fa-envelope" />
              </div>
              <div className="field">
                <input type="text" name="phone" placeholder="Phone" />
                <i className="fas fa-phone-alt" />
              </div>
              <div className="message">
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                  defaultValue={""}
                />
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="button-area">
              <button
                type="submit"
                title="Sorry! This service hasn't active yet. Till then have live chat."
              >
                Submit <i className="fa fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
