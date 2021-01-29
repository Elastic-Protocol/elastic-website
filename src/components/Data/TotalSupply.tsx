import React from 'react';
import useSWR from 'swr';
import { rawFetcher } from '../../data/utils';
import { erc20Abi } from '../../data/constants';
import { formatEther } from 'ethers/lib/utils';
import NumberFormat from 'react-number-format';

const TotalSupply = ({ contract, provider, decimals }) => {
  const { data, error  } = useSWR([ contract, 'totalSupply' ],
		{
			fetcher: rawFetcher(provider, erc20Abi)
		}
  );
  
  if (error) return <>error</>;
  if (!data) return <>...</>;

  return (
    <NumberFormat
      value={formatEther(data)} 
      displayType={'text'} 
      thousandSeparator={true} 
      decimalScale={decimals} 
    />
  )
}

export default TotalSupply;