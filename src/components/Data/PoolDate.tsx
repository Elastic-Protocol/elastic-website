import React from 'react';
import useSWR from 'swr';
import { rawFetcher } from '../../data/utils';
import { poolAbi } from '../../data/constants';
import { format, fromUnixTime, formatDistanceToNowStrict } from 'date-fns';

const PoolDate = ({ contract, provider, method, type }) => {
  const { data, error  } = useSWR([ contract, method ],
		{
			fetcher: rawFetcher(provider, poolAbi)
		}
  );

  if (error) return <>error</>;
  if (!data) return <>...</>;
  
  if (type === "date") return <span>{format(fromUnixTime(data.toNumber()), 'P')}</span>;
  if (type === "duration") return <span>{(data.toNumber()/3600).toFixed()} hours</span>;
  if (type === "distance") return <span>{formatDistanceToNowStrict(fromUnixTime(data.toNumber()))}</span>;
  return <>error</>;
}

export default PoolDate;