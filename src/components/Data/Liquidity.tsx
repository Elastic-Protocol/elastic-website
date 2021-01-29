import React from 'react';
import useSWR from 'swr';
import { gql } from 'graphql-request';
import { pairFetcher } from '../../data/utils';
import NumberFormat from 'react-number-format';

const Liquidity = ({ decimals, pairId, prefix }) => {
  const tokenQuery = gql`
  {
    pair(id: "${pairId}") {
      id
      reserve0
      reserve1
      token0Price
      token1Price
      volumeToken0
      volumeToken1
    }
  }
  `;

  const { data: tokenRes, error: tokenError  } : any  = useSWR(tokenQuery,
		{
			fetcher: pairFetcher()
		}
  );

  if (tokenError) return <>error</>;
  if (!tokenRes ) return <>...</>;
  if (!tokenRes.pair) return <>error</>;
  
  const token0Liquidty =  Number.parseFloat(tokenRes.pair.reserve0) * Number.parseFloat(tokenRes.pair.token0Price);
  const token1Liquidity = Number.parseFloat(tokenRes.pair.reserve1) * Number.parseFloat(tokenRes.pair.token1Price);
  const liquidity = token0Liquidty+token1Liquidity;

  return (
    <NumberFormat
      prefix={prefix}
      value={liquidity} 
      displayType={'text'} 
      thousandSeparator={true} 
      decimalScale={decimals} 
    />
  )
}

export default Liquidity;