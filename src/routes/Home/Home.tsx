import React, { FC } from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';
import { HeroText, Preview, HeroAnimation, TokenData } from './components';
import {
  DOCS_ADDRESS,
  MEDIUM_ADDRESS 
} from '../../data/constants';
import { ReactComponent as ApplicationsDiagram } from '../../components/Assets/Images/applications_diagram.svg';
import { ReactComponent as IconTarget } from '../../components/Assets/Images/icon_target.svg';
import { ReactComponent as IconLiquidity } from '../../components/Assets/Images/icon_liquidity.svg';
import { ReactComponent as IconCex } from '../../components/Assets/Images/icon_cex.svg';
import { ReactComponent as IconStable } from '../../components/Assets/Images/icon_stable.svg';
import { ReactComponent as IconGrowth } from '../../components/Assets/Images/icon_growth.svg';
import { ReactComponent as IconSynth } from '../../components/Assets/Images/icon_synth.svg';
import { ReactComponent as IconIndex } from '../../components/Assets/Images/icon_index.svg';
import TempArticle from '../../components/Assets/Images/temp-article.jpg';

import './Home.scss';

const Home: FC = () => (
  <div className="Home Page">
    <div className="Section__wrapper">
      <Row className="Section__container">
        <Col lg={{ span: 10 }} xs={{ span: 24 }} className="vertical-centered"><HeroText /></Col>
        <Col lg={{ span: 12, offset: 2 }} xs={{ span: 24 }}><Preview /></Col>
      </Row>
    </div>
    <div className="Section__wrapper">
      <Row className="Section__container">
        <Col lg={{ span: 18, offset: 3 }} xs={{ span: 24 }}>
          <h2 className="text-centered heading-clipped">A new class of financial products</h2>
          <p className="text-centered">Elastic assets derive their value from the performance of an underlying resource without needing to collateralize or hold the resource.</p>
          <p className="text-centered">Almost anything can be ‘elasticized’ to provide exposure to an asset - enabling the creation of innovative new financial markets.</p>
        </Col>
      </Row>
      <Row className="Section__container">
        <Col className="padded-column text-centered" lg={{ span: 0 }} sm={{ span: 12 }} xs={{ span: 24 }}>
          <div>
            <IconStable className="Feature__icon" />
            <h4>Elastic Pegs</h4>
          </div>
          <div>
            <p className="sub-text">Engineered to match a stable price.</p>
          </div>
        </Col>
        <Col className="padded-column text-centered" lg={{ span: 0 }} sm={{ span: 12 }} xs={{ span: 24 }}>
          <div>
            <IconGrowth className="Feature__icon" />
            <h4>Elastic Indexes</h4>
          </div>
          <div>
            <p className="sub-text">Engineered to match the patterns of a group of underlying assets.</p>
          </div>
        </Col>
        <Col className="padded-column text-centered" lg={{ span: 0 }} sm={{ span: 12 }} xs={{ span: 24 }}>
          <div> 
            <IconSynth className="Feature__icon" />
            <h4>Elastic Synths</h4>
          </div>
          <div>
            <p className="sub-text">Engineered to match the patterns of a single underlying asset.</p>
          </div>
        </Col>
        <Col className="padded-column text-centered" lg={{ span: 0 }} sm={{ span: 12 }} xs={{ span: 24 }}>
          <div> 
            <IconIndex className="Feature__icon" />
            <h4>Novel Pegs</h4>
          </div>
          <div>
            <p className="sub-text">Engineered to create novel relationships with underlying assets.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-centered" xl={{ span: 24 }} lg={{ span: 0 }} xs={{ span: 0 }}>
          <ApplicationsDiagram />
        </Col>
      </Row>
    </div>
    
    <div className="Section__wrapper">
      <Row className="Section__container">
        <Col lg={{ span: 11, offset: 0 }} xs={{ span: 24 }} className="vertical-centered">
          <div>
            <h2>How does it work?</h2>
            <p>Elastic's assets use elastic-supply mechanisms developed by <a className="text-link" target="_blank" rel="noreferrer" href="https://www.ampleforth.org/">Ampleforth</a> to self-collateralize by automatically adjusting their supply to match the price of the underlying resources they represent.</p>
            <p>Supply adjustments are triggered in response to price changes of the underlying resources or the Elastic asset itself.</p>
            <a 
              className="Btn Btn--primary"
              href={`${DOCS_ADDRESS}`}
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
          </div>
        </Col>
        <Col xl={{ span: 11, offset: 2 }} lg={{ span: 0 }} xs={{ span: 0 }}>
          <HeroAnimation />
        </Col>
      </Row>
    </div>

    <div className="Section__wrapper">
      <Row className="Section__container">
        <Col lg={{ span: 11, offset: 0 }} xs={{ span: 0 }} className="vertical-centered">
          <TokenData />
        </Col>
        <Col lg={{ span: 11, offset: 2 }} xs={{ span: 24 }} className="vertical-centered">
          <div>
            <h2>Elastic Token (ELS)</h2>
            <p>ELS is Elastic’s fixed-supply governance token which incentivizes the growth of Elastic markets and provides a mechanism for participating in the entire Elastic asset class.</p>
            <p>ELS plays multiple other roles including: seeding new Elastic markets, diversifying exposure and providing community-owned governance.</p>
            <div className="Section__actions">
              <div>
                <a 
                  className="Btn Btn--primary"
                  href={`${DOCS_ADDRESS}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read more
                </a>
              </div>
              <div><Link to={`/app/products/PLS`} className="Btn Btn--ghost">Token details</Link></div>
            </div>
          </div>
        </Col>
      </Row>
    </div>

    <div className="Section__wrapper">
      <Row className="Section__container">
        <Col lg={{ span: 18, offset: 3 }} xs={{ span: 24 }}>
          <h2 className="text-centered heading-clipped">Incentivized marketplace</h2>
          <p className="text-centered">The Elastic ecosystem consists primarily of three types of users: Elastic Token (ELS) holders, liquidity providers and Elastic asset holders.</p>
        </Col>
      </Row>
      <Row className="Section__container">
        <Col className="padded-column text-centered" lg={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }}>
          <div>
            <IconCex className="Feature__icon" />
            <h4>Elastic Token Holders</h4>
          </div>
          <div>
            <p className="sub-text">ELS holders are incentivized to increase fairness, robustness and efficiency in markets.</p>
            <a 
              className="Btn Btn--ghost"
              href={`${DOCS_ADDRESS}`}
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
          </div>
        </Col>
        <Col className="padded-column text-centered" lg={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }}>
          <div>
            <IconLiquidity className="Feature__icon" />
            <h4>Liquidity Providers</h4>
          </div>
          <div>
            <p className="sub-text">Liquidity providers are incentivized to provide stability and security to markets.</p>
            <a 
              className="Btn Btn--ghost"
              href={`${DOCS_ADDRESS}`}
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
          </div>
        </Col>
        <Col className="padded-column text-centered" lg={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }}>
          <div> 
            <IconTarget className="Feature__icon" />
            <h4>Elastic Asset Holders</h4>
          </div>
          <div>
            <p className="sub-text">Elastic asset holders are participants in markets incentivized to provide growth and sustainability.</p>
            <a 
              className="Btn Btn--ghost"
              href={`${DOCS_ADDRESS}`}
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
          </div>
        </Col>
      </Row>
    </div>
    <div className="Section__wrapper">
      <Row className="Section__container">
        <Col lg={{ span: 18, offset: 3 }} xs={{ span: 24 }}>
          <h2 className="text-centered heading-clipped">Recommended reading</h2>
          <p className="text-centered">Learn more about Elastic and the future of self-collateralizing markets.</p>
        </Col>
      </Row>
      <Row className="Section__container">
        <Col className="padded-column" lg={{ span: 8 }} xs={{ span: 24 }}>
          <a 
            className="Article__link"
            href={`${MEDIUM_ADDRESS}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={TempArticle} className="Article__link__image" alt="" />
            <div className="Article__link__content">
              <h4>The Elastic Protocol in depth</h4>
              <p className="sub-text">Phil McCraken <span>January 28, 2021</span></p>
            </div>
          </a>
        </Col>
        <Col className="padded-column" lg={{ span: 8 }} xs={{ span: 24 }}>
          <a 
            className="Article__link"
            href={`${MEDIUM_ADDRESS}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={TempArticle} className="Article__link__image" alt="" />
            <div className="Article__link__content">
              <h4>Community Launch &amp; Token Distribution</h4>
              <p className="sub-text">Phil McCraken <span>February 1, 2021</span></p>
            </div>
          </a>
        </Col>
        <Col className="padded-column" lg={{ span: 8 }} xs={{ span: 24 }}>
          <a 
            className="Article__link"
            href={`${MEDIUM_ADDRESS}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={TempArticle} className="Article__link__image" alt="" />
            <div className="Article__link__content">
              <h4>How to maximize your ELS</h4>
              <p className="sub-text">Phil McCraken <span>February 2, 2021</span></p>
            </div>
          </a>
        </Col>
      </Row>
    </div>
  </div>
);

export default Home;