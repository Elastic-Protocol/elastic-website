import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { network } from '../../../../data/constants';
import { Tabs, Badge } from 'antd';
import { PoolItem, ProductItem } from '../../../../components';
import Pools from '../../../../data/pools.json';
import Products from '../../../../data/products.json';
import { ReactComponent as IconInr } from '../../../../components/Assets/Images/icon_inr.svg';
import { ReactComponent as IconPolka } from '../../../../components/Assets/Images/icon_polkastarter.svg';
import DummySaleProgress from '../../../../components/Assets/Images/dummy_sale_progress.png';
import {
  DOCS_ADDRESS,
} from '../../../../data/constants';
import './Preview.scss';

const { TabPane } = Tabs;

const Preview = () => {
  const [provider, setProvider]: [any | null, any] = useState(null);
  
  useEffect(() => {
		async function initProvider() {
			const provider = new ethers.providers.EtherscanProvider(network, 'WSEBKEYQAFZ8AUGMFAKJR7GPCNYZ9Q3AIE');
			setProvider(provider);
		}
		initProvider();
  }, []);
  
  return (
    <Tabs className="Preview__tabs" defaultActiveKey="1">
      <TabPane tab={<h4>Elastic Token</h4>} key="1">
        <div className="Preview__inner">
          <div className="TokenSale">
            <div className="TokenSale__header">
              <div className="TokenSale__title">
                <IconInr className="TokenSale__icon" />
                <h4>Elastic Token IDO</h4>
              </div>
              <div className="TokenSale__badge">
                <Badge color="#f40b79" /> in 5 days
              </div>
            </div>
            <div className="TokenSale__content">
              <p className="TokenSale__description">
                Join our public sale on Polkastarter. 100% of funds raised are used to provide liquidty for the Uniswap ELS/ETH pair. <a href={`${DOCS_ADDRESS}/protocol/elastic-token/community-launch`} target="_blank" rel="noreferrer">Learn more</a>.
              </p>
              <ul className="TokenSale__list">  
                <li>
                  <span className="TokenSale__label">Total Raise</span>{" "}
                  $1,000,000
                </li>
                <li>
                  <span className="TokenSale__label">Total distribution</span>{" "}
                  1,000,000 ELS
                </li>
                <li>
                  <span className="TokenSale__label">Ratio per 1 ETH</span>{" "}
                  751.87 ELS
                </li>
                <li>
                  <span className="TokenSale__label">Max Allocation</span>{" "}
                  10.00 ETH
                </li>
              </ul>
              <div className="TokenSale__tempImage">
                <img src={DummySaleProgress} alt="" />
              </div>
            </div>
            <div className="TokenSale__actions">
              <div>
                <a className="Btn Btn--tertiary" href="https://polkastarter.com/pools/c90397e99cf3a11353707554e5" target="_blank" rel="noreferrer">Join Sale</a>
                <a className="Btn Btn--ghost" href={`${DOCS_ADDRESS}/protocol/elastic-token/community-launch`} target="_blank" rel="noreferrer">ELS Tokenomics</a>
              </div>
              <IconPolka className="Icon__polkastarter" />
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane tab={<h4>Latest Assets</h4>} key="2">
        <div className="Preview__inner">
          {Products.map((item, index) => <ProductItem provider={provider} item={item} key={index+1} /> )}
        </div>
      </TabPane>
      <TabPane tab={<h4>Latest Staking Pools</h4>} key="3">
        <div className="Preview__inner">
          {Pools.map((item, index) => <PoolItem provider={provider} item={item} key={index+1} /> )}
        </div>
      </TabPane>
    </Tabs>
  )
};

export default Preview;