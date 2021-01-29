import React, { FC } from 'react';
import { NavLink } from "react-router-dom";
import Products from '../../../data/products.json';
import Pools from '../../../data/pools.json';
import {
  DOCS_ADDRESS,
  GIT_ADDRESS,
  DISCORD_ADDRESS,
  TELEGRAM_ADDRESS,
  TWITTER_ADDRESS,
  MEDIUM_ADDRESS 
} from '../../../data/constants';
import './AppFooter.scss';

const AppFooter: FC = () => (
  <footer className="AppFooter">
    <div className="AppFooter__container">
      <div className="AppFooter__left">
      <section className="AppFooter__section">
          <h4>About</h4>
          <ul className="AppFooter__link__section">
            <li className="AppFooter__link__item">
              <a
                target="_blank" 
                rel="noreferrer"
                href={`${DOCS_ADDRESS}`}
                className="AppFooter__link"
              >
                Docs
              </a>
            </li>
            <li className="AppFooter__link__item">
              <a
                target="_blank" 
                rel="noreferrer"
                href={`${DOCS_ADDRESS}`}
                className="AppFooter__link"
              >
                Tokenomics
              </a>
            </li>
            <li className="AppFooter__link__item">
              <a
                target="_blank" 
                rel="noreferrer"
                href={`${DOCS_ADDRESS}`}
                className="AppFooter__link"
              >
                Roadmap
              </a>
            </li>
            <li className="AppFooter__link__item">
              <a
                target="_blank" 
                rel="noreferrer"
                href={`${DOCS_ADDRESS}`}
                className="AppFooter__link"
              >
                FAQ
              </a>
            </li>
            <li className="AppFooter__link__item">
              <a href={`${MEDIUM_ADDRESS}`} rel="noreferrer" target="_blank" className="AppFooter__link">
                Blog
              </a>
            </li>
            <li className="AppFooter__link__item">
              <a href={`${GIT_ADDRESS}`} target="_blank" rel="noreferrer" className="AppFooter__link">
                Contracts
              </a>
            </li>
          </ul>
        </section>
        <section className="AppFooter__section">
          <h4>Products</h4>
          <ul className="AppFooter__link__section">
            {Products.map((item, index) =>
              <li className="AppFooter__link__item" key={index}>
                <NavLink

                  to={`/app/product/${item.id}`}
                  className="AppFooter__link"
                  key={index+1}
                >
                  {item.projectName}
                </NavLink>
              </li>
            )}
          </ul>
        </section>
        <section className="AppFooter__section">
          <h4>Staking Pools</h4>
          {Pools.map((item, index) =>
            <li className="AppFooter__link__item" key={index}>
              <NavLink

                to={`/app/stake/${item.id}`}
                className="AppFooter__link"
                key={index+1}
              >
                {item.poolName}
              </NavLink>
            </li>
          )}
        </section>
        <section className="AppFooter__section">
          <h4>Community</h4>
          <ul className="AppFooter__link__section">
            <li className="AppFooter__link__item">
              <a href={`${DISCORD_ADDRESS}`} target="_blank" rel="noreferrer" className="AppFooter__link">
                Discord
              </a>
            </li>
            <li className="AppFooter__link__item">
              <a href={`${TELEGRAM_ADDRESS}`} target="_blank" rel="noreferrer" className="AppFooter__link">
                Telegram
              </a>
            </li>
            <li className="AppFooter__link__item">
              <a href={`${TWITTER_ADDRESS}`} target="_blank" rel="noreferrer" className="AppFooter__link">
                Twitter
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="AppFooter__right">
        <section className="AppFooter__section">
          <p>&copy; 2021 Elastic</p>        
        </section>
      </div>
    </div>
  </footer>
);

export default AppFooter;