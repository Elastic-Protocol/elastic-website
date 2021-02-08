import React, { FC } from 'react';
import { Link } from "react-router-dom";
import {
  DOCS_ADDRESS,
} from '../../../../data/constants';

import './HeroText.scss';

const HeroText: FC = () => (
  <div className="HeroText">
    <h1>Self-collateralizing financial primatives</h1>
    <p>Elastic enables any real-world asset to be digitized and traded in 24-hour permissionless decentralized financial markets.</p>
    <div className="HeroText__actions">
      <div><Link to={`/start`} className="Btn Btn--secondary">Get started</Link></div>
      <div><a href={`${DOCS_ADDRESS}`} className="Btn Btn--ghost" target="_blank" rel="noreferrer">Read docs</a></div>
    </div>
  </div>
);

export default HeroText;