import React, { FC, useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Routes from "./routes/routes";
import "typeface-inter";
import './App.scss';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: FC = () => (
    <Router>
      <ScrollToTop />
      <Routes />
    </Router>
);

export default App;