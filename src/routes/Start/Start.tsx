import React, { FC } from 'react';
import { Row, Col, Timeline } from 'antd';
import { Link } from "react-router-dom";
import {
  DOCS_ADDRESS,
} from '../../data/constants';
import './Start.scss';

const Start: FC = () => (
  <div className="Start Page">
    <div className="Section__wrapper">
      <Row className="Section__container">
        <Col>
          <h2>Getting started guide</h2>
          <Timeline className="Start__timeline" mode="left">
            <Timeline.Item>
              <div className="Start__timeline__item">
                <h4>Learn</h4>
                <p>Understand the project: What is it? How does it work? What are the benefits? What does the future hold?</p>
                <ul>
                  <li>
                    <a 
                      className="more-link"
                      href={`${DOCS_ADDRESS}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Overview
                    </a>
                  </li>
                  <li>
                    <a 
                      className="more-link"
                      href={`${DOCS_ADDRESS}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Project Roadmap
                    </a>
                  </li>
                  <li>
                    <a 
                      className="more-link"
                      href={`${DOCS_ADDRESS}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a 
                      className="more-link"
                      href={`${DOCS_ADDRESS}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Overview
                    </a>
                  </li>
                </ul>
              </div>
            </Timeline.Item>
            <Timeline.Item>
              <div className="Start__timeline__item">
                <h4>Buy Plastic Token (PLS)</h4>
                <p>PLS can be found on UniSwap and is the easiest way to get exposure to all Plastic assets.</p>
                <ul>
                  <li>
                    <a 
                      className="more-link"
                      href={`${DOCS_ADDRESS}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Tokenomics
                    </a>
                  </li>
                  <li>
                    <a className="more-link" href="https://www.uniswap.org" target="_blank" rel="noreferrer">Uniswap (we recommend the ETH pair)</a>
                  </li>
                </ul>
              </div>
            </Timeline.Item>
            <Timeline.Item>
              <div className="Start__timeline__item">
                <h4>Stake</h4>
                <p>Leverage your PLS holdings to accumulate Plastic assets and supercharge your PLS holdings.</p>
                <ul>
                  <li><a className="more-link" href="https://www.uniswap.org" target="_blank" rel="noreferrer">Staking guide</a></li>
                  <li><Link to={`/app/stake`} className="more-link">Staking pools</Link></li>
                </ul>
              </div>
            </Timeline.Item>
          </Timeline>
        </Col>
      </Row>
    </div>
  </div>
);

export default Start;