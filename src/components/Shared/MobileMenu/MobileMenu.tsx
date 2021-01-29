import React from 'react';
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoText } from '../../Assets/Images/elastic_logo_text.svg';
import {
  DOCS_ADDRESS,
  GIT_ADDRESS,
  DISCORD_ADDRESS,
  TELEGRAM_ADDRESS,
  TWITTER_ADDRESS,
  MEDIUM_ADDRESS 
} from '../../../data/constants';
import './MobileMenu.scss';

const MobileMenu = () => {
  return (
    <div className="MobileMenu">
      <div className="MobileMenu__container">
        <LogoText className="Mobile__logo" />   
        <section className="MobileMenu__section">
          <ul className="MobileMenu__link__section">
            <li className="MobileMenu__link__item">
              <NavLink
                to="/"
                className="MobileMenu__link MobileMenu__link--page"
                isActive={(match) => (!match || !match.isExact) ? false : true}
              >
                Home
              </NavLink>
            </li>
            <li className="MobileMenu__link__item">
              <a
                target="_blank" 
                rel="noreferrer"
                href="https://uniswap.org/"
                className="MobileMenu__link MobileMenu__link--page"
              >
                Get ELS
              </a>
            </li>
            <li className="MobileMenu__link__item">
              <NavLink
                to="/app/products"
                className="MobileMenu__link MobileMenu__link--page"
                isActive={(match) => (!match || !match.isExact) ? false : true}
              >
                Products
              </NavLink>
            </li>
            <li className="MobileMenu__link__item">
              <NavLink
                to="/app/stake"
                className="MobileMenu__link MobileMenu__link--page"
                isActive={(match) => (!match || !match.isExact) ? false : true}
              >
                Staking Pools
              </NavLink>
            </li>
          </ul>
        </section>
        <section className="MobileMenu__section">
          <h4>About</h4>
          <ul className="MobileMenu__link__section">
            <li className="MobileMenu__link__item">
              <a
                target="_blank" 
                rel="noreferrer"
                href={`${DOCS_ADDRESS}`}
                className="MobileMenu__link"
              >
                Docs
              </a>
            </li>
            <li className="MobileMenu__link__item">
              <a
                target="_blank" 
                rel="noreferrer"
                href={`${DOCS_ADDRESS}`}
                className="MobileMenu__link"
              >
                Tokenomics
              </a>
            </li>
            <li className="MobileMenu__link__item">
              <a
                target="_blank" 
                rel="noreferrer"
                href={`${DOCS_ADDRESS}`}
                className="MobileMenu__link"
              >
                Roadmap
              </a>
            </li>
            <li className="MobileMenu__link__item">
              <a
                target="_blank" 
                rel="noreferrer"
                href={`${DOCS_ADDRESS}`}
                className="MobileMenu__link"
              >
                FAQ
              </a>
            </li>
            <li className="MobileMenu__link__item">
              <a href={`${MEDIUM_ADDRESS}`} rel="noreferrer" target="_blank" className="MobileMenu__link">
                Blog
              </a>
            </li>
            <li className="MobileMenu__link__item">
              <a href={`${GIT_ADDRESS}`} target="_blank" rel="noreferrer" className="MobileMenu__link">
                Contracts
              </a>
            </li>
          </ul>
        </section>
        <section className="MobileMenu__section">
          <h4>Community</h4>
          <ul className="MobileMenu__link__section">
            <li className="MobileMenu__link__item">
              <a href={`${DISCORD_ADDRESS}`}target="_blank" rel="noreferrer" className="MobileMenu__link">
                Discord
              </a>
            </li>
            <li className="MobileMenu__link__item">
              <a href={`${TELEGRAM_ADDRESS}`} target="_blank" rel="noreferrer" className="MobileMenu__link">
                Telegram
              </a>
            </li>
            <li className="MobileMenu__link__item">
              <a href={`${TWITTER_ADDRESS}`} target="_blank" rel="noreferrer" className="MobileMenu__link">
                Twitter
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
      
  )
}

export default MobileMenu;