import React from 'react';
import { ComingSoon } from '../../../components/Shared';
import './Propose.scss';

const Propose = () => {
  return (
    <div className="Propose">
      <h2 className="Propose__title">Propose</h2>
      <div className="Propose__content">
        <ComingSoon heading={'Coming Soon'} content={'Use ELS to propose new E-Fi products to be chosen by the community.'} />
      </div>
    </div>
  );
}

export default Propose;