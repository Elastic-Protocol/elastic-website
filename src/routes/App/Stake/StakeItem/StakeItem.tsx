import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import NumberFormat from 'react-number-format';
import Pools from '../../../../data/pools.json';
import StakeView from '../StakeView/StakeView';
import { Balance, PoolClaimed, PoolDate } from '../../../../components';
import { uniswap_add } from '../../../../data/constants';
import { Row, Col, Radio } from 'antd';

import { ReactComponent as IconClose } from '../../../../components/Assets/Images/icon_close.svg';
import { ReactComponent as IconInr } from '../../../../components/Assets/Images/icon_inr.svg';
import { ReactComponent as IconEs } from '../../../../components/Assets/Images/icon_es.svg';
import { ReactComponent as IconEi } from '../../../../components/Assets/Images/icon_ei.svg';
import { ReactComponent as IconGp } from '../../../../components/Assets/Images/icon_gp.svg';
import { ReactComponent as IconSp } from '../../../../components/Assets/Images/icon_sp.svg';

import "./StakeItem.scss";

enum PoolStatus {
  'Active' = 'Active',
  'Inactive' = 'Inactive',
  'Finished' = 'Finished',
}

enum TokenType {
  'liquidity' = 'liquidity tokens',
  'token' = 'tokens',
}


const RenderImage = (image) => {
  switch(image) {
    case "INR": return <IconInr className="StakeItem__icon" />;
    case "GP": return <IconGp className="StakeItem__icon" />;
    case "ES": return <IconEs className="StakeItem__icon" />;
    case "EI": return <IconEi className="StakeItem__icon" />;
    case "SP": return <IconSp className="StakeItem__icon" />;
    default: return <IconInr className="StakeItem__icon" />;
  }
}

const StakeStat = ({ label, value }) => (
  <div className="StakeStat">
    <p className="StakeStat__label">{label}</p>
    <p className="StakeStat__value">{value}</p>
  </div>
)

const StakeInstruction = ({ stake, receive, stakeTokenType }) => (
  <div className="StakeInstruction">
    <p className="StakeInstruction__title">Instructions</p>
    <ul className="StakeInstruction__steps">
      <li>Deposit {stake} {TokenType[stakeTokenType]}</li>
      <li>Receive a continuous drip of {receive}</li>
    </ul>
  </div>
)


const StakeItem = ({ provider }) => {
  let { poolId } : { poolId: string } = useParams();
  
  const [stakeView, setStakeView]: [string, any] = useState('a');
  const [poolData, setPoolData]: [any | null, any] = useState(null);
  const [poolDataLoading, setPoolDataLoading]: [boolean, any] = useState(true);

  const injected = new InjectedConnector({ supportedChainIds: [1, 3] });
  const { activate, active } = useWeb3React();

  useEffect(() => {
    const poolItem = Pools.find(pool => pool.id === poolId);
    if (poolItem) {
      setPoolData(poolItem);
      setPoolDataLoading(false);
    }
  }, [poolId]);

  return (
    <div className="StakeItem">
      <div className="StakeItem__container">
        <Link 
          to={`/app/stake`}
          className="StakeItem__close"
        >
          <IconClose />
        </Link>
        <div className="StakeItem__content">
          {poolDataLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <Row gutter={[16, 16]} className="StakeItem__top">
                <Col lg={{ span: 24 }} xs={{ span: 24 }} className="StakeItem__title">
                  {RenderImage(poolData.image)}<h3>{poolData.poolName}</h3>
                </Col>
                <Col lg={{ span: 24 }} xs={{ span: 24 }} className="StakeItem__description">
                  <ul className="StakeItem__list">
                    <li><span>Status</span> <span>{PoolStatus[poolData.status]}</span></li>
                    <li><span>Start date</span> <PoolDate contract={poolData.contract} provider={provider} method={'startTime'} type={'date'} /></li>
                    <li><span>Pool type</span> <span>{poolData.type}</span></li>
                    <li><span>Period</span> <PoolDate contract={poolData.contract} provider={provider} method={'periodDuration'} type={'duration'} /></li>
                    <li><span>Next reward</span> <PoolDate contract={poolData.contract} provider={provider} method={'periodFinishTime'} type={'distance'} /></li>
                  </ul>
                  <p>{poolData.description}</p>
                </Col>
              </Row>          
              <Row gutter={[16, 16]}>
                <Col lg={{ span: 24 }} xs={{ span: 24 }}>
                  <StakeInstruction 
                    stake={
                      poolData.stakingToken.tokenType === 'liquidity'
                      ? <a 
                          href={uniswap_add(poolData.stakingToken.pairToken1, poolData.stakingToken.pairToken0)}
                          rel="noreferrer" target="_blank"
                        >
                          {poolData.stakingToken.name}
                        </a>
                      : <Link to={`/app/products/${poolData.stakingToken.name}`}>{poolData.stakingToken.name}</Link>
                    }
                    receive={<Link to={`/app/products/${poolData.rewardToken.name}`}>{poolData.rewardToken.name}</Link>}
                    stakeTokenType={poolData.stakingToken.tokenType}
                  />
                </Col>
                <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                  <StakeStat 
                    label={"Remaining"}
                    value={
                      <>
                        <Balance contract={poolData.rewardToken.contract} address={poolData.contract} provider={provider} decimals={0} />
                        {"/"}
                        <NumberFormat
                          value={poolData.reward.initial} 
                          displayType={'text'} 
                          thousandSeparator={true} 
                          decimalScale={0} 
                        />
                        {" "}
                        {poolData.rewardToken.name} 
                      </>
                    }
                  />
                </Col>
                <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                  <StakeStat 
                    label={"Claimed"}
                    value={
                      <>
                        <PoolClaimed contract={poolData.rewardToken.contract} address={poolData.contract} provider={provider} decimals={0} subtract={poolData.reward.initial} />
                        {"/"}
                        <NumberFormat
                          value={poolData.reward.initial} 
                          displayType={'text'} 
                          thousandSeparator={true} 
                          decimalScale={0} 
                        />
                        {" "}
                        {poolData.rewardToken.name} 
                      </>
                    }
                  />
                </Col>
              </Row>
              <Row gutter={[16, 16]} style={{ marginTop: "1rem" }}>
                <Col span={24} className="StakeItem__radioContainer">
                  <Radio.Group defaultValue="a" size="large" onChange={(e) => setStakeView(e.target.value)}>
                    <Radio.Button value="a">Stake</Radio.Button>
                    <Radio.Button value="b">Claim</Radio.Button>
                    <Radio.Button value="c">Unstake</Radio.Button>
                    <Radio.Button value="d">Claim &amp; Unstake</Radio.Button>
                  </Radio.Group>
                </Col>
                {active ? (
                  <StakeView stakeView={stakeView} tokenAddress={poolData.stakingToken.contract} poolAddress={poolData.contract} stakeToken={poolData.stakingToken.name} />
                ) : (
                  <Col span={24}>
                    <div className="StakeItem__connect">
                      <p>Connect MetaMask to interact with pool</p>
                      <button className="Btn Btn--secondary" onClick={() => activate(injected)}>
                        Connect to metamask
                      </button>
                    </div>
                  </Col>
                )}
              </Row>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default StakeItem;