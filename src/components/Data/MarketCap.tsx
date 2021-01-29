import React from 'react';
import useSWR from 'swr';
import { gql } from 'graphql-request';
import { rawFetcher, poolsFetcher, pairFetcher } from '../../data/utils';
import { erc20Abi } from '../../data/constants';
import { formatEther } from 'ethers/lib/utils';
import NumberFormat from 'react-number-format';

const MarketCap = ({ contract, provider, decimals, pools, pairId, prefix }) => {
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

  const { data: totalSupply, error: totalError  } = useSWR([ contract, 'totalSupply' ],
		{
			fetcher: rawFetcher(provider, erc20Abi)
		}
  );
  
  const { data: poolsBalance, error: poolsError  } = useSWR([ contract, 'balanceOf', pools ],
		{
			fetcher: poolsFetcher(provider, erc20Abi)
		}
  );

  const { data: tokenRes, error: tokenError  } : any  = useSWR(tokenQuery,
		{
			fetcher: pairFetcher()
		}
  );

  if (totalError || poolsError || tokenError) return <>error</>;
  if (!totalSupply || !poolsBalance || !tokenRes ) return <>...</>;
  if (!tokenRes.pair) return <>error</>;

  const circulatingSupply = totalSupply.sub(poolsBalance);
  const tokenPrice = tokenRes.pair.token0Price;
  const marketCap = Number.parseFloat(formatEther(circulatingSupply)) * Number.parseFloat(tokenPrice);

  return (
    <NumberFormat
      prefix={prefix}
      value={marketCap} 
      displayType={'text'} 
      thousandSeparator={true} 
      decimalScale={decimals} 
    />
  )
}

export default MarketCap;