import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { format, fromUnixTime } from 'date-fns';
import { Row, Col } from 'antd';
import Products from '../../../../data/products.json';
import Pools from '../../../../data/pools.json';
import { explorer, uniswap_swap, uniswap_add } from '../../../../data/constants';
import { truncate } from '../../../../data/utils';
import { StakeTable, CirculatingSupply, TotalSupply, MarketCap, Price, Liquidity } from '../../../../components';
import "./Product.scss";

import { ReactComponent as IconClose } from '../../../../components/Assets/Images/icon_close.svg';
import { ReactComponent as IconInr } from '../../../../components/Assets/Images/icon_inr.svg';
import { ReactComponent as IconEs } from '../../../../components/Assets/Images/icon_es.svg';
import { ReactComponent as IconEi } from '../../../../components/Assets/Images/icon_ei.svg';
import { ReactComponent as IconGp } from '../../../../components/Assets/Images/icon_gp.svg';
import { ReactComponent as IconSp } from '../../../../components/Assets/Images/icon_sp.svg';

const RenderImage = (image) => {
  switch(image) {
    case "INR": return <IconInr className="StakeItem__icon" />;
    case "GP": return <IconGp className="StakeItem__icon" />;
    case "ES": return <IconEs className="StakeItem__icon" />;
    case "EI": return <IconEi className="StakeItem__icon" />;
    case "SP": return <IconSp className="StakeItem__icon" />;
    default: return <IconInr className="StakeItem__icon" />;
  }
}

const ProductStat = ({ label, value }) => (
  <div className="ProductStat">
    <p className="ProductStat__label">{label}</p>
    <p className="ProductStat__value">{value}</p>
  </div>
)

const Product = ({ provider }) => {
  let { productId } : { productId: string } = useParams();

  const [productData, setProductData]: [any | null, any] = useState(null);
  const [productDataLoading, setProductDataLoading]: [boolean, any] = useState(true);
  const [poolData, setPoolData]: [any | null, any] = useState(null);
  const [poolDataLoading, setPoolDataLoading]: [boolean, any] = useState(true);

  useEffect(() => {
    const productItem: any = Products.find(product => product.id === productId);
    if (productItem) {
      setProductData(productItem);
      setProductDataLoading(false);      
      const productPools = Pools.filter(pool => productItem.pools.includes(pool.id));
      setPoolData(productPools);
      setPoolDataLoading(false);
    }

  }, [productId]);

  return (
    <div className="Product">
      <div className="Product__container">
        <Link 
          to={`/app/products`}
          className="Product__close"
        >
          <IconClose />
        </Link>
        <div className="Product__content">
        {productDataLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <Row gutter={[16, 16]} className="Product__top">
                <Col lg={{ span: 24 }} className="Product__title">
                  <div className="Product__title__image">
                    {RenderImage(productData.image)}
                  </div>
                  <div className="Product__title__text">
                    <h3>{productData.projectName} ({productData.ticker})</h3>
                    {productData.contract && 
                      <a 
                        href={`${explorer}contract/${productData.contract}`} 
                        rel="noreferrer"
                        target="_blank"
                      >
                          {truncate(productData.contract, 18, '...')}
                      </a>
                    }
                  </div>
                </Col>
                <Col lg={{ span: 24 }} className="Product__description">
                  <ul className="Product__list">
                    <li><span>Status</span> <span>{productData.status}</span></li>
                    <li><span>Supply type</span> <span>{productData.supplyType}</span></li>
                    <li><span>Start date</span> <span>{productData.startTime ? format(fromUnixTime(productData.startTime), 'P') : "..."}</span></li>                    
                  </ul>
                  <p>{productData.descriptionLong}</p>
                </Col>
              </Row>          
              <Row gutter={[16, 16]}>
                <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                  <ProductStat 
                    label={"Supply"}
                    value={
                      !poolDataLoading && 
                      <>
                        <CirculatingSupply 
                          contract={productData.contract}
                          provider={provider}
                          decimals={0}
                          pools={poolData.filter(pool => pool.contract).map(pool => pool.contract)} 
                        />
                        {"/"}
                        <TotalSupply contract={productData.contract} provider={provider} decimals={0} />
                      </>
                    }
                  />
                </Col>
                <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                  <ProductStat 
                    label={"Liquidity"}
                    value={
                      !poolDataLoading && <Liquidity 
                        decimals={2}
                        prefix="US$"
                        pairId={productData.pairId}
                      />
                    }
                  />
                </Col>
                <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                  <ProductStat 
                    label={"Market Cap"}
                    value={
                      !poolDataLoading && <MarketCap 
                        contract={productData.contract}
                        provider={provider}
                        decimals={0}
                        prefix="US$"
                        pools={poolData.filter(pool => pool.contract).map(pool => pool.contract)} 
                        pairId={productData.pairId}
                      />
                    } 
                  />
                </Col>
                <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                  <ProductStat 
                    label={"Price"}
                    value={
                      !poolDataLoading && <Price 
                        decimals={4}
                        prefix="US$"
                        pairId={productData.pairId}
                      />
                    }
                  />
                </Col>
                
              </Row>
              <Row gutter={[16, 16]}>
                <Col lg={{ span: 24 }}>
                  {poolDataLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <StakeTable provider={provider} data={poolData} size="small" />
                  )}
                </Col>
              </Row>
              {productData.status === "Active" && 
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <a 
                      className="Btn Btn--secondary Product__action"
                      href={uniswap_swap(productData.pairToken, productData.contract)}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Get {productData.ticker}
                    </a>
                  </Col>
                  <Col span={24}>
                    <a 
                      className="Btn Btn--tertiary Product__action"
                      href={uniswap_add(productData.pairToken, productData.contract)}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Add liquidity
                    </a>
                  </Col>
                </Row>
              }
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;