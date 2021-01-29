import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import NavItemDropdown from './NavItemDropdown';
import './Navigation.scss';

const SNav = styled.nav`
  display: flex;
  box-sizing: border-box;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 1.875rem;
  transition: right 0.25s ease 0s;
`

const SButton = styled.button`
  color: ${({ isSelected }) => isSelected ? '#efc2d3' : '#fff'};
  background: none;
  border: none;
  font-size: 1rem;
  &:hover {
    color: #efc2d3;
  }
`

const Navigation = () => {
  const [isAboutOpen, setIsAboutOpen]: [boolean, any] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen]: [boolean, any] = useState(false);

  return (
    <SNav>
      <div className="Nav__item Nav__item--hasDropdown" onMouseEnter={() => setIsAboutOpen(true)} onMouseLeave={() => setIsAboutOpen(false)}>
        <SButton className="Nav__btn" isSelected={false}>About</SButton>
        <NavItemDropdown
          isNavItemOpen={isAboutOpen}
          context="about"
        />
      </div>
      <div className="Nav__item">
        <NavLink
          to="/app/products"
          className="Nav__link Nav__btn"
          isActive={(match) => (!match || !match.isExact) ? false : true}
        >
          Products
        </NavLink>
      </div>
      <div className="Nav__item">
        <NavLink
          to="/app/stake"
          className="Nav__link Nav__btn"
          isActive={(match) => (!match || !match.isExact) ? false : true}
        >
          Staking Pools
        </NavLink>
      </div>
      <div className="Nav__item Nav__item--hasDropdown" onMouseEnter={() => setIsCommunityOpen(true)} onMouseLeave={() => setIsCommunityOpen(false)}>
        <SButton className="Nav__btn" isSelected={false}>Community</SButton>
        <NavItemDropdown
          isNavItemOpen={isCommunityOpen}
          context="community"
        />
      </div>
    </SNav>
  )
}

export default Navigation;