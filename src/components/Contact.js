import React, { useRef, useState } from "react";

const Contact = () => {
  const [copySuccess, setCopySuccess] = useState(
    "moustapha.eloutmani@gmail.com"
  );
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Email Copied!");
  }
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        <i className="fas fa-headset" /> Get in <span>Touch</span>
      </h2>
      {/*
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
      </div> */}
      <div>
        <br />

        <div className="button-area">
          <button title="Click to Copy" onClick={copyToClipboard}>
            {copySuccess}
            <i className="fa fa-paper-plane" />
          </button>
        </div>
        <br />

        <input
          style={{ backgroundColor: "#e5ecfb", color: "#e5ecfb" }}
          ref={textAreaRef}
          value="moustapha.eloutmani@gmail.com"
        />
      </div>
      
    </section>
  );
};

export default Contact;
