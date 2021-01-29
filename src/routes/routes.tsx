import React, { FC, Suspense, lazy, useState, useCallback, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { ethers } from 'ethers';
import { Web3ReactProvider } from '@web3-react/core';
import { HamburgerElastic } from 'react-animated-burgers'
import { LoadingFrame, AppHeader, AppFooter, MobileMenu } from "../components/Shared";
import { Layout } from 'antd';
const { Content, Sider } = Layout;

const Home = lazy(() => import("./Home/Home"));
const Start = lazy(() => import("./Start/Start"));
const App = lazy(() => import("./App/App"));

const getLibrary = (provider) => {
	const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 12000;
  
	return library;
}

const Routes: FC = () => {

  const [isActive, setIsActive] = useState(false)

  const toggleButton = useCallback(
    () => setIsActive(prevState => !prevState),
    [],
  );

  const toggleMenu = useCallback(
    () => setIsActive(prevState => prevState ? false : prevState),
    [],
  );

  const location = useLocation();

  useEffect(
    () => toggleMenu(),
    [location, toggleMenu]
  );

  return (
    <Layout className={location.pathname.includes('/app') ? "isLab" : ""}>
      <Layout className={ isActive ? "sider-active" : ""}>
        <AppHeader />
        <Content>
          <Suspense fallback={<LoadingFrame />}>
            <Switch>
              <Route path="/" exact children={<Home />} />
              <Route
                path="/start"
                exact
                children={<Start />}
              />
              <Route
                path="/app"
                render={({ match: { url } }) => 
                  <Web3ReactProvider getLibrary={getLibrary}><App url={url} /></Web3ReactProvider>
                }
              />
            </Switch>
          </Suspense>
        </Content>
        <AppFooter />
      </Layout>
      <Sider
        className={isActive ? "mobile-menu mobile-menu--isActive" : "mobile-menu"}
        trigger={
          <HamburgerElastic buttonStyle={{ backgroundColor: "none" }} buttonWidth={30} barColor="#fff" className="mobile-menu__trigger" {...{ isActive }} />
        }
        onCollapse={() => toggleButton()}
        collapsed={!isActive}
        breakpoint="md"
        collapsedWidth="0"
        defaultCollapsed={true}
        width={"100vw"}
      >
        <MobileMenu />
      </Sider>
    </Layout>
  );
};


export default Routes;

