import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { format, fromUnixTime } from 'date-fns';
import { network, contractAddress, pairId, startTime } from '../../../../data/constants';
import { TotalSupply, CirculatingSupply, Liquidity, MarketCap, Price } from '../../../../components';
import { Row, Col } from 'antd';
import './TokenData.scss';

const TokenData = () => {
  const [provider, setProvider]: [any | null, any] = useState(null);
  
  useEffect(() => {
		async function initProvider() {
			const provider = new ethers.providers.EtherscanProvider(network, 'WSEBKEYQAFZ8AUGMFAKJR7GPCNYZ9Q3AIE');
			setProvider(provider);
		}
		initProvider();
  }, []);

  return provider ? <TokenDataContent provider={provider} /> : null

}

const TokenDataContent = ({ provider }) => {
  return (
    <div className="TokenData">
      <Row gutter={[16, 16]}>
        <Col sm={{ span: 12 }} xs={{ span: 24 }}>
          <div className="TokenData__item">
            <h4>Launch Date</h4>
            <p>{format(fromUnixTime(startTime), 'P')}</p>
          </div>
        </Col>
        <Col sm={{ span: 12 }} xs={{ span: 12 }}>
          <div className="TokenData__item">
            <h4>Price</h4>
            <p>
              <Price 
                decimals={4}
                prefix="US$"
                pairId={pairId.inr}
              />
            </p>
          </div>
        </Col>
        <Col sm={{ span: 12 }} xs={{ span: 24 }}>
          <div className="TokenData__item">
            <h4>Circulating Supply</h4>
            <p><CirculatingSupply contract={contractAddress.inr} provider={provider} decimals={0} pools={[contractAddress.inrWethLpPool]} /></p>
          </div>
        </Col>
        <Col sm={{ span: 12 }} xs={{ span: 24 }}>
          <div className="TokenData__item">
            <h4>Total Supply</h4>
            <p><TotalSupply contract={contractAddress.inr} provider={provider} decimals={0} /></p>
          </div>
        </Col>
        <Col sm={{ span: 12 }} xs={{ span: 24 }}>
          <div className="TokenData__item">
            <h4>Liquidity</h4>
            <p>
              <Liquidity 
                decimals={0}
                prefix="US$"
                pairId={pairId.inr}
              />
            </p>
          </div>
        </Col>
        <Col sm={{ span: 12 }} xs={{ span: 12 }}>
          <div className="TokenData__item">
            <h4>Market Capitalization</h4>
            <p>
              <MarketCap 
                contract={contractAddress.inr}
                provider={provider}
                decimals={0}
                prefix="US$"
                pools={[contractAddress.inrWethLpPool]} 
                pairId={pairId.inr}
              />
            </p>
          </div>
        </Col>
      </Row>
    </div>
  )
};

export default TokenData;