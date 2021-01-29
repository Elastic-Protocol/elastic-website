import React from 'react';
import styled from 'styled-components';
import {
  DOCS_ADDRESS,
  GIT_ADDRESS,
  DISCORD_ADDRESS,
  TELEGRAM_ADDRESS,
  TWITTER_ADDRESS,
  MEDIUM_ADDRESS 
} from '../../data/constants';

const SNavItemDropdown = styled.div`
  display: ${({ isNavItemOpen }) => isNavItemOpen ? 'block' : 'none'};
  position: absolute;
  padding-top: 1.5rem;
  top: 0;
  left: 0;
  z-index: 100;
`

const SNavItemContainer = styled.div`
  display: flex;  
  flex-direction: column;
  background: #24231D;
  padding: 2px 10px 14px;
  margin-left: -6px;
  z-index: 100;
`

const NavItemDropdown = ({ isNavItemOpen, context }) => {
    switch(context) {
      case "about": return (
        <SNavItemDropdown isNavItemOpen={isNavItemOpen}>
          <SNavItemContainer>
            <a
              target="_blank" 
              rel="noreferrer"
              href={`${DOCS_ADDRESS}`}
              className="Nav__link"
            >
              Docs
            </a>
            <a href={`${MEDIUM_ADDRESS}`} rel="noreferrer" target="_blank" className="Nav__link">
              Tokenomics
            </a>
            <a href={`${MEDIUM_ADDRESS}`} rel="noreferrer" target="_blank" className="Nav__link">
              Roadmap
            </a>
            <a href={`${MEDIUM_ADDRESS}`} rel="noreferrer" target="_blank" className="Nav__link">
              FAQ
            </a>
            <a href={`${MEDIUM_ADDRESS}`} rel="noreferrer" target="_blank" className="Nav__link">
              Blog
            </a>
            <a href={`${GIT_ADDRESS}`} target="_blank" rel="noreferrer" className="Nav__link">
              Contracts
            </a>
          </SNavItemContainer>
        </SNavItemDropdown>
      );
      case "community": return (
        <SNavItemDropdown isNavItemOpen={isNavItemOpen}>
          <SNavItemContainer>
            <a href={`${DISCORD_ADDRESS}`} target="_blank" rel="noreferrer" className="Nav__link">
              Discord
            </a>
            <a href={`${TELEGRAM_ADDRESS}`} target="_blank" rel="noreferrer" className="Nav__link">
              Telegram
            </a>
            <a href={`${TWITTER_ADDRESS}`} target="_blank" rel="noreferrer" className="Nav__link">
              Twitter
            </a>
          </SNavItemContainer>
        </SNavItemDropdown>
      );
      default: return null;
    }
}

export default NavItemDropdown