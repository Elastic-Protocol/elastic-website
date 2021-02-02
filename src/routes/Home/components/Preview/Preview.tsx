import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { network } from '../../../../data/constants';
import { Tabs } from 'antd';
import { PoolItem, ProductItem } from '../../../../components';
import Pools from '../../../../data/pools.json';
import Products from '../../../../data/products.json';
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
          {Products.map((item, index) => <ProductItem provider={provider} item={item} key={index+1} /> )}
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