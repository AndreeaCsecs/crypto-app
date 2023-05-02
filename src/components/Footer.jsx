import React from "react";
import github from "./Images/Github.png";

const Footer = () => {
  return (
    <div className="Footer">
      <img
        src={github}
        alt=""
        style={{ width: "22px", height: "21px" }}
        className="m-2"
      />
      <a
        href="https://github.com/AndreeaCsecs/crypto-app"
        target="_blank"
        rel="noreferrer"
      >
        View Code in GitHub
      </a>
    </div>
  );
};

export default Footer;
