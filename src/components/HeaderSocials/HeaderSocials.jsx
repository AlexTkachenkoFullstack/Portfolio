import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTelegramPlane } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/oleksandr-tkachenko-developer/" target="_blank" rel="noreferrer noopener">
        <BsLinkedin />
      </a>
      <a href="https://github.com/AlexTkachenkoFullstack" target="_blank" rel="noreferrer noopener">
        <FaGithub />
      </a>
      <a href="http://t.me/alex_goltf" target="_blank" rel="noreferrer noopener">
        <FaTelegramPlane />
      </a>
    </div>
  );
};

export default HeaderSocials;
