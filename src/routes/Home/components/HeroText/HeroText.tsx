import React, { FC } from 'react';
import { Link } from "react-router-dom";
import './HeroText.scss';

const HeroText: FC = () => (
  <div className="HeroText">
    <h1>Trustless self-collateralizing markets</h1>
    <p>Elastic is a decentralized synthetic asset issuance protocol completely removed from the existing financial ecosystem.</p>
    <div className="HeroText__actions">
      <div><Link to={`/start`} className="Btn Btn--secondary">Get started</Link></div>
      <div><Link to={`/start`} className="Btn Btn--ghost">Read docs</Link></div>
    </div>
  </div>
);

export default HeroText;