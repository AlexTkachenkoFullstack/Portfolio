import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTelegramPlane } from "react-icons/fa";
import './headerSocials.css';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/oleksandr-tkachenko-developer/" target="_blank" rel="noreferrer noopener">
        <BsLinkedin className='header_icon'/>
      </a>
      <a href="https://github.com/AlexTkachenkoFullstack" target="_blank" rel="noreferrer noopener">
        <FaGithub className='header_icon'/>
      </a>
      <a href="http://t.me/alex_goltf" target="_blank" rel="noreferrer noopener">
        <FaTelegramPlane className='header_icon'/>
      </a>
    </div>
  );
};

export default HeaderSocials;
