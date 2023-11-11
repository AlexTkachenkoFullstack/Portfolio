import React from 'react';
import './header.css';
import CTA from 'components/CTA/CTA';
import HeaderSocials from '../HeaderSocials/HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi, everybody. I am</h5>
        <h1>Oleksandr Tkachenko</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scoll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
