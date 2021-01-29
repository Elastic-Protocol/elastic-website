import React from 'react';
import useSWR from 'swr';
import { rawFetcher, poolsFetcher } from '../../data/utils';
import { erc20Abi } from '../../data/constants';
import { formatEther } from 'ethers/lib/utils';
import NumberFormat from 'react-number-format';

const CirculatingSupply = ({ contract, provider, decimals, pools }) => {
  const { data: totalSupply, error: totalError  } = useSWR([ contract, 'totalSupply' ],
		{
			fetcher: rawFetcher(provider, erc20Abi)
		}
  );
  
  const { data: poolsBalance, error: activeError  } = useSWR([ contract, 'balanceOf', pools ],
		{
			fetcher: poolsFetcher(provider, erc20Abi)
		}
  );

  if (totalError || activeError) return <>error</>;
  if (!totalSupply || !poolsBalance) return <>...</>;

  const circulatingSupply = totalSupply.sub(poolsBalance);

  return (
    <NumberFormat
      value={formatEther(circulatingSupply)} 
      displayType={'text'} 
      thousandSeparator={true} 
      decimalScale={decimals} 
    />
  )
}

export default CirculatingSupply;