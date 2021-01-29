import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
import { ethers } from 'ethers';
import { network, explorer } from '../../../data/constants';
import { truncate } from '../../../data/utils';
import { TotalSupply, CirculatingSupply, MarketCap } from '../../../components';
import ProductsData from '../../../data/products.json';
import PoolsData from '../../../data/pools.json';
import { Table, Badge, Grid } from 'antd';
import Product from './Product/Product';

import { ReactComponent as IconInr } from '../../../components/Assets/Images/icon_inr.svg';
import { ReactComponent as IconEs } from '../../../components/Assets/Images/icon_es.svg';
import { ReactComponent as IconEi } from '../../../components/Assets/Images/icon_ei.svg';
import { ReactComponent as IconGp } from '../../../components/Assets/Images/icon_gp.svg';
import { ReactComponent as IconSp } from '../../../components/Assets/Images/icon_sp.svg';

import './Products.scss';

enum PoolStatus {
  'Active' = 'Active',
  'Inactive' = 'Inactive',
  'Finished' = 'Finished',
}

const RenderImage = (image) => {
  switch(image) {
    case "INR": return <IconInr className="ProductsTable__icon" />;
    case "GP": return <IconGp className="ProductsTable__icon" />;
    case "ES": return <IconEs className="ProductsTable__icon" />;
    case "EI": return <IconEi className="ProductsTable__icon" />;
    case "SP": return <IconSp className="ProductsTable__icon" />;
    default: return <IconInr className="ProductsTable__icon" />;
  }
}

const RenderBadge = (status) => {
  switch(PoolStatus[status]) {
    case PoolStatus.Active: return <Badge color="green" />;
    case PoolStatus.Inactive: return <Badge color="red" />;
    case PoolStatus.Finished: return<Badge color="orange" />;
  }
}

const { useBreakpoint } = Grid;

const Products = ({ url }) => {
  const screens = useBreakpoint();
  const columns = [
    {
      key: 'product',
      width: screens.xs ? '100%' : '40%',
      render: (record) => 
        <div className="ProductsTable__product">
          <div className="ProductsTable__title">
            <div className="ProductsTable__title__image">{RenderImage(record.image)}</div>
            <div className="ProductsTable__title__text">
              <h5>{record.projectName} ({record.ticker})</h5>
              {record.contract && 
                <a 
                  href={`${explorer}contract/${record.contract}`} 
                  rel="noreferrer"
                  target="_blank"
                >
                    {truncate(record.contract, 18, '...')}
                </a>
              }
            </div>
          </div>
          <div className="ProductsTable__description">{record.description}</div>
        </div>
    },
    {
      title: 'Market Cap',
      key: 'cap',
      width: '15%',
      render: (record) => {
        if (!record.contract) return <>{"-"}/{"-"}</>
        const productPools = PoolsData.filter(pool => record.pools.includes(pool.id)).filter(pool => pool.contract).map(pool => pool.contract);
        return (
          <MarketCap 
            contract={record.contract}
            provider={provider}
            decimals={0}
            prefix="US$"
            pools={productPools} 
            pairId={record.pairId}
          />
        )
        }
    },
    {
      title: 'Supply',
      key: 'supply',
      width: '20%',
      render: (record) => {
        if (!record.contract) return <>{"-"}/{"-"}</>
        const productPools = PoolsData.filter(pool => record.pools.includes(pool.id)).filter(pool => pool.contract).map(pool => pool.contract);
        return (
          <>
            <CirculatingSupply contract={record.contract} provider={provider} decimals={0} pools={productPools} />
            /<TotalSupply contract={record.contract} provider={provider} decimals={0} />
          </>
        )
      }
    },
    {
      title: 'Status',
      key: 'status',
      render: (record) => 
        <div>
          {RenderBadge(record.status)} {PoolStatus[record.status]}
        </div>
    },
    {
      key: 'action',
      render: (record) => (
        <Link to={`/app/products/${record.id}`} className="Btn Btn--primary">View</Link>
      ),
    },
  ];

  const [provider, setProvider]: [any | null, any] = useState(null);

  useEffect(() => {
		async function initProvider() {
			const provider = new ethers.providers.EtherscanProvider(network, 'WSEBKEYQAFZ8AUGMFAKJR7GPCNYZ9Q3AIE');
			setProvider(provider);
		}
		initProvider();
  }, []);

  return (
    <div className="Products">
      <h2 className="Products__title">Products</h2>
      {provider && <Table columns={columns} dataSource={ProductsData} pagination={false} rowKey="ticker" />}
      <Route exact path={`${url}/products/:productId`}>
        {provider && <Product provider={provider} /> }
      </Route>
    </div>
  );
}

export default Products;