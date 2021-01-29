import React from 'react';
import { ComingSoon } from '../../../components/Shared';
import './Vote.scss';

const Vote = () => {
  return (
    <div className="Vote">
      <h2 className="Vote__title">Vote</h2>
      <div className="Vote__content">
        <ComingSoon heading={'Coming Soon'} content={'Use ELS to vote on which new E-Fi product proposals should be launched.'} />
      </div>
    </div>
  );
}

export default Vote;