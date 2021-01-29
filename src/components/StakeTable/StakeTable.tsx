import React from 'react';
import { Link } from "react-router-dom";
import NumberFormat from 'react-number-format';
import { Table, Badge, Grid } from 'antd';
import { Balance, PoolDate } from '../';
import { uniswap_add } from '../../data/constants';

import "./StakeTable.scss";

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
    case "INR": return <IconInr className="StakeTable__icon" />;
    case "GP": return <IconGp className="StakeTable__icon" />;
    case "ES": return <IconEs className="StakeTable__icon" />;
    case "EI": return <IconEi className="StakeTable__icon" />;
    case "SP": return <IconSp className="StakeTable__icon" />;
    default: return <IconInr className="StakeTable__icon" />;
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

const StakeTable = ({ provider, data, size }) => {
  const screens = useBreakpoint();
  const columns = [
    {
      title: size === "large" ? false : 'Stake',
      key: 'pool',
      width: screens.xs ? '100%' : size === "large" ? '40%' : '43%',
      render: (record) => 
        <div className="StakeTable__pool">
          <div className="StakeTable__title">
            <div className="StakeTable__title__image">{RenderImage(record.image)}</div>
            <div className="StakeTable__title__text">
              <h5>{record.poolName}</h5>
              {
                record.stakingToken.tokenType === 'liquidity'
                ? <a 
                    href={uniswap_add(record.stakingToken.pairToken1, record.stakingToken.pairToken0)}
                    rel="noreferrer" target="_blank"
                  >
                    {record.stakingToken.name}
                  </a>
                : <Link to={`/app/products/${record.stakingToken.name}`}>{record.stakingToken.name}</Link>
              }
            </div>
          </div>
          <div className="StakeTable__description">{record.description}</div>
        </div>
    },
    {
      title: 'Next reward',
      key: 'rewardToken.namreward',
      width: size === "large" ? '15%' : '18%',
      render: (record) => 
        <div className="StakeTable__reward">
          <Link to={`/app/products/${record.rewardToken.name}`}>{record.rewardToken.name}</Link>
          {record.contract &&
            <div>in <PoolDate contract={record.contract} provider={provider} method={'periodFinishTime'} type={'distance'} /></div>
          }
        </div>
    },
    {
      title: size === "large" ? 'Progress' : null,
      key: 'progress',
      width: size === "large" ? '20%' : 0,
      render: (record) => {
        if(size === "large") {
          if (!record.rewardToken.contract) {
            return (
              <>
                {"-"}/<NumberFormat value={record.reward.initial} displayType={'text'} thousandSeparator={true} />
              </>
            )
          }
          return (
            <>
              <Balance contract={record.rewardToken.contract} address={record.contract} provider={provider} decimals={0} />
              /<NumberFormat value={record.reward.initial} displayType={'text'} thousandSeparator={true} />
            </>
          )
        } else { return null }
      }
    },
    {
      title: 'Status',
      key: 'status',
      render: (record) => 
        <div>
          {RenderBadge(record.status)} {record.status}
        </div>
    },
    {
      key: 'action',
      render: (record) => (
        <Link to={`/app/stake/${record.id}`} className="Btn Btn--primary">View</Link>
      ),
    },
  ];


  return (
    <div className="StakeTable">
      {provider && <Table columns={columns} dataSource={data} pagination={false} rowKey="id" />}
    </div>
  );
}

export default StakeTable;