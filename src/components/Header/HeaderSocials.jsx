import React from "react";
import { FaLinkedin, FaGithub, FaWordpress, FaDiscord } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/margaretnaaoduaboye/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/margaretboye" target="_blank">
        <FaGithub />
      </a>
      <a href="https://discord.com/Steev-Vhoo" target="_blank">
        <FaDiscord />
      </a>
    </div>
  );
};

export default HeaderSocials;
