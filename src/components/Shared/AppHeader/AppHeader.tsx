import React, { FC } from 'react';
import { Link } from "react-router-dom";
import Navigation from '../../Navigation/Navigation';
import { ReactComponent as LogoText } from '../../Assets/Images/elastic_logo_text.svg';
import './AppHeader.scss';

const AppHeader: FC = () => (
  <header className="AppHeader">
    <div className="AppHeader__container">
      <div className="AppHeader__left">
        <div className="AppHeader__logo__wrapper">
          <Link to="/" className="AppHeader__logo">
            <LogoText />
          </Link>
        </div>
      </div>
      <div className="AppHeader__right">
        <div className="AppHeader__nav__wrapper">
          <Navigation />
        </div>
        <div className="AppHeader__actions__wrapper">
          <a className="Btn Btn--primary" href="https://www.uniswap.org" target="_blank" rel="noreferrer">Get ELS</a>
        </div>
      </div>
    </div>
  </header>
);

export default AppHeader;