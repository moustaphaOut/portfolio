import React, { useRef, useState } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { Provider } from "./Layout";

const NotFound = () => {
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
    <section  style={{textAlign: "center"}}>
     <div style={{marginBottom: "20%"}}>

</div>
      <h2 className="heading">
        <i className="fas fa-exclamation-triangle" /> Are You <span>Lost ?</span>
      </h2>
      <div className="resumebtn">
        <Link to="/" className="btn" >
          <span>Back to safe zone</span>
          <i className="fas fa-chevron-right" />
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
