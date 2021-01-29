import React from 'react';
import useSWR from 'swr';
import { gql } from 'graphql-request';
import { pairFetcher } from '../../data/utils';
import NumberFormat from 'react-number-format';

const Price = ({ decimals, pairId, prefix }) => {
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
  
  const tokenPrice = tokenRes.pair.token0Price;

  return (
    <NumberFormat
      prefix={prefix}
      value={tokenPrice} 
      displayType={'text'} 
      thousandSeparator={true} 
      decimalScale={decimals} 
    />
  )
}

export default Price;