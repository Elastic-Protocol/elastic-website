import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import { ethers } from 'ethers';
import { network } from '../../../data/constants';
import { StakeTable } from '../../../components';
import StakeItem from './StakeItem/StakeItem';

import Pools from '../../../data/pools.json';
import "./Stake.scss";

const Stake = ({ url }) => {
  const [provider, setProvider]: [any | null, any] = useState(null);

  useEffect(() => {
		async function initProvider() {
			const provider = new ethers.providers.EtherscanProvider(network, 'WSEBKEYQAFZ8AUGMFAKJR7GPCNYZ9Q3AIE');
			setProvider(provider);
		}
		initProvider();
  }, []);

  return (
    <div className="Stake">
      <h2 className="Stake__title">Stake</h2>
      <StakeTable provider={provider} data={Pools} size="large" />
      <Route exact path={`${url}/stake/:poolId`}>
       {provider && <StakeItem provider={provider} /> }
      </Route>
    </div>
  );
}

export default Stake;