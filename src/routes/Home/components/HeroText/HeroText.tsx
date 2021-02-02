import React, { FC } from 'react';
import { Link } from "react-router-dom";
import {
  DOCS_ADDRESS,
} from '../../../../data/constants';

import './HeroText.scss';

const HeroText: FC = () => (
  <div className="HeroText">
    <h1>Trustless self-collateralizing markets</h1>
    <p>Elastic's self-collateralizing synthetic assets enable the creation of innovative new markets that can track the price of anything.</p>
    <div className="HeroText__actions">
      <div><Link to={`/start`} className="Btn Btn--secondary">Get started</Link></div>
      <div><a href={`${DOCS_ADDRESS}`} className="Btn Btn--ghost" target="_blank" rel="noreferrer">Read docs</a></div>
    </div>
  </div>
);

export default HeroText;