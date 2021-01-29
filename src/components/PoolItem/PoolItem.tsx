import React from 'react';
import { Link } from "react-router-dom";
import NumberFormat from 'react-number-format';
import { Badge, Tooltip } from 'antd';
import { Balance, PoolDate } from '../';
import './PoolItem.scss';

import { ReactComponent as IconInr } from '../Assets/Images/icon_inr.svg';
import { ReactComponent as IconEs } from '../Assets/Images/icon_es.svg';
import { ReactComponent as IconEi } from '../Assets/Images/icon_ei.svg';
import { ReactComponent as IconGp } from '../Assets/Images/icon_gp.svg';
import { ReactComponent as IconSp } from '../Assets/Images/icon_sp.svg';

enum PoolStatus {
  'Active' = 'Active',
  'Inactive' = 'Inactive',
  'Finished' = 'Finished',
}

const RenderImage = (image) => {
  switch(image) {
    case "INR": return <IconInr className="PoolItem__icon" />;
    case "GP": return <IconGp className="PoolItem__icon" />;
    case "ES": return <IconEs className="PoolItem__icon" />;
    case "EI": return <IconEi className="PoolItem__icon" />;
    case "SP": return <IconSp className="PoolItem__icon" />;
    default: return <IconInr className="PoolItem__icon" />;
  }
}

const RenderBadge = (status) => {
  switch(PoolStatus[status]) {
    case PoolStatus.Active: return <Tooltip title={status}><Badge color="green" /></Tooltip>;
    case PoolStatus.Inactive: return <Tooltip title={status}><Badge color="red" /></Tooltip>;
    case PoolStatus.Finished: return <Tooltip title={status}><Badge color="orange" /></Tooltip>;
  }
}

const PoolItem = ({ provider, item }) => {
  
  const renderRewardRemaining = () => {
		if (!item.rewardToken.contract) { return "-" }
		return <Balance contract={item.rewardToken.contract} address={item.contract} provider={provider} decimals={0} />
  };

  return (
    <Link to={`/app/stake/${item.id}`} className="ProductItem">
      <div className="PoolItem__header">
        <div className="PoolItem__title">
          {RenderImage(item.image)}
          <h4>{item.poolName}</h4>
        </div>
        {RenderBadge(item.status)}
      </div>
      <div className="PoolItem__content">
        <p className="PoolItem__description">
          {item.description}
        </p>
        <ul className="PoolItem__list">
          <li><span className="PoolItem__label">Deposit:</span> {item.stakingToken.name}</li>
          <li>
            <span className="PoolItem__label">Next reward:</span>
            {" "}
            {item.rewardToken.name}
            {item.contract &&
              <>{" "} in <PoolDate contract={item.contract} provider={provider} method={'periodFinishTime'} type={'distance'} /></>
            }
          </li>          
          <li>
            <span className="PoolItem__label">Remaining:</span>{" "}
            {renderRewardRemaining()}/<NumberFormat value={item.reward.initial} displayType={'text'} thousandSeparator={true} />
          </li>
        </ul>
      </div>
    </Link>
  )
}

export default PoolItem;