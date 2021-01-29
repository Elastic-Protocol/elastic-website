import React, { lazy, useEffect } from 'react';
import { Route, NavLink } from "react-router-dom";
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import { InjectedConnector, NoEthereumProviderError, UserRejectedRequestError } from '@web3-react/injected-connector';
import { truncate } from '../../data/utils';
import { Layout, message } from 'antd';
import { ReactComponent as IconReward } from '../../components/Assets/Images/icon_reward.svg';
import { ReactComponent as IconMetamask } from '../../components/Assets/Images/icon_metamask.svg';

import { ReactComponent as IconProducts } from '../../components/Assets/Images/icon_products.svg';
import { ReactComponent as IconStake } from '../../components/Assets/Images/icon_stake.svg';
import { ReactComponent as IconPropose } from '../../components/Assets/Images/icon_propose.svg';
import { ReactComponent as IconVote } from '../../components/Assets/Images/icon_vote.svg';

import "./App.scss";

const { Content, Sider } = Layout;
const Products = lazy(() => import("./Products/Products"));
const Stake = lazy(() => import("./Stake/Stake"));
const Propose = lazy(() => import("./Propose/Propose"));
const Vote = lazy(() => import("./Vote/Vote"));

const App = ({ url }) => {
  const injected = new InjectedConnector({ supportedChainIds: [1, 3] });
  const { account, activate, active, error } = useWeb3React();

  useEffect(
		() => {
      const isUserRejectedRequestError = error instanceof UserRejectedRequestError;
      const isNoEthereumProviderError = error instanceof NoEthereumProviderError;
      const isUnsupportedChainIdError = error instanceof UnsupportedChainIdError;

			if (isUnsupportedChainIdError) {
        message.error({
          content: 'Please connect to main network',
          duration: 3,
          className: 'message-error',
        });
			} else if (isNoEthereumProviderError) {
        message.error({
          content: 'Metamask not found',
          duration: 3,
          className: 'message-error',
        });
			} else if (isUserRejectedRequestError) {
        message.error({
          content: 'Cannot connect to metamask',
          duration: 3,
          className: 'message-error',
        });
			}
		},
		[error]
	);

  return (
    <Layout className="Lab">
      <Sider
        breakpoint="lg"
        collapsedWidth="60"
        width={200} 
        className="Lab__sider"
      >
          <div className="Lab__account">
            {active ? (
              <div className="Lab__account__user">
                <IconReward className="Lab__account__icon" />
                <h5>{truncate(account, 15, '...')}</h5>
              </div>
            ) : (
              <button className="Btn Btn--primary Lab__account__btn" onClick={() => activate(injected)}>
                <IconMetamask className="Lab__menu__icon Lab__menu__icon--metamask" /> <span className="Lab__menu__text">Connect to metamask</span>
              </button>
            )}
          </div>
        <div className="Lab__menu">
          <NavLink 
            to={`${url}/products`}
            isActive={(match) => (!match) ? false : true}
            className="Lab__menu__item"
          >
            <IconProducts className="Lab__menu__icon" /> <span className="Lab__menu__text">Products</span>
          </NavLink>
          <NavLink 
            to={`${url}/stake`}
            isActive={(match) => (!match) ? false : true}
            className="Lab__menu__item"
          >
            <IconStake className="Lab__menu__icon" /> <span className="Lab__menu__text">Stake</span>
          </NavLink>
          <NavLink 
            to={`${url}/propose`}
            isActive={(match) => (!match) ? false : true}
            className="Lab__menu__item"
          >
            <IconPropose className="Lab__menu__icon" /> <span className="Lab__menu__text">Propose</span>
          </NavLink>
          <NavLink 
            to={`${url}/vote`}
            isActive={(match) => (!match) ? false : true}
            className="Lab__menu__item"
          >
            <IconVote className="Lab__menu__icon" /> <span className="Lab__menu__text">Vote</span>
          </NavLink>
        </div>
        
      </Sider>
      <Layout className="Lab__content__wrapper">
        <Content className="Lab__content">
            <Route path={`${url}/products`}>
              <Products url={url} />
            </Route>
            <Route path={`${url}/stake`}>
              <Stake url={url} />
            </Route>
            <Route exact path={`${url}/propose`}>
              <Propose />
            </Route>
            <Route exact path={`${url}/vote`}>
              <Vote />
            </Route>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;