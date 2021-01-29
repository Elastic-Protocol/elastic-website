import React from 'react';
import { ethers } from 'ethers';
import useSWR from 'swr';
import { rawFetcher } from '../../data/utils';
import { erc20Abi } from '../../data/constants';
import { formatEther, parseUnits } from 'ethers/lib/utils';
import NumberFormat from 'react-number-format';

const PoolClaimed = ({ contract, address, provider, decimals, subtract }) => {
  const { data, error  } = useSWR([ contract, 'balanceOf', address ],
		{
			fetcher: rawFetcher(provider, erc20Abi)
		}
  );

  if (error) return <>error</>;
  if (!data) return <>...</>;
  
  let subtractBig = ethers.BigNumber.from(parseUnits(String(subtract)));
  let result = subtractBig.sub(data);
  return (
    <NumberFormat
      value={formatEther(result)} 
      displayType={'text'} 
      thousandSeparator={true} 
      decimalScale={decimals} 
    />
  )
}

export default PoolClaimed;