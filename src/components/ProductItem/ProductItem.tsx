import React from 'react';
import { Badge, Tooltip } from 'antd';
import { Link } from "react-router-dom";
import { TotalSupply, CirculatingSupply } from '../';
import PoolsData from '../../data/pools.json';
import './ProductItem.scss';

import { ReactComponent as IconInr } from '../Assets/Images/icon_inr.svg';
import { ReactComponent as IconEs } from '../Assets/Images/icon_es.svg';
import { ReactComponent as IconEi } from '../Assets/Images/icon_ei.svg';
import { ReactComponent as IconGp } from '../Assets/Images/icon_gp.svg';
import { ReactComponent as IconSp } from '../Assets/Images/icon_sp.svg';

enum TokenStatus {
  'Active' = 'Active',
  'Inactive' = 'Inactive',
  'Finished' = 'Finished',
}

const RenderImage = (image) => {
  switch(image) {
    case "INR": return <IconInr className="ProductItem__icon" />;
    case "GP": return <IconGp className="ProductItem__icon" />;
    case "ES": return <IconEs className="ProductItem__icon" />;
    case "EI": return <IconEi className="ProductItem__icon" />;
    case "SP": return <IconSp className="ProductItem__icon" />;
    default: return <IconInr className="ProductItem__icon" />;
  }
}

const RenderBadge = (status) => {
  switch(TokenStatus[status]) {
    case TokenStatus.Active: return <Tooltip title={status}><Badge color="green" /></Tooltip>;
    case TokenStatus.Inactive: return <Tooltip title={status}><Badge color="red" /></Tooltip>;
    case TokenStatus.Finished: return <Tooltip title={status}><Badge color="orange" /></Tooltip>;
  }
}

const ProductItem = ({ provider, item }) => {
  const renderTotalSupply = () => {
		if (!item.contract || !provider) { return "-" }
		return <TotalSupply contract={item.contract} provider={provider} decimals={0} />;
  };

  const renderCircSupply = () => {
    if (!item.contract || !provider) { return "-" }
    const productPools = PoolsData.filter(pool => item.pools.includes(pool.id)).filter(pool => pool.contract).map(pool => pool.contract);
		return <CirculatingSupply contract={item.contract} provider={provider} decimals={0} pools={productPools} />;
  };

  return (
    <Link to={`/app/products/${item.id}`} className="ProductItem">
      <div className="ProductItem__header">
        <div className="ProductItem__title">
          {RenderImage(item.image)}
          <h4>{item.projectName} ({item.ticker})</h4>
        </div>
        {RenderBadge(item.status)}
      </div>
      <div className="ProductItem__content">
        <p className="ProductItem__description">
          {item.description}
        </p>
        <ul className="ProductItem__list">  
          <li>
            <span className="ProductItem__label">Circulating Supply:</span>{" "}
            {renderCircSupply()}
          </li>
          <li>
            <span className="ProductItem__label">Total Supply:</span>{" "}
            {renderTotalSupply()}
          </li>
        </ul>
      </div>
    </Link>
  )
}

export default ProductItem;