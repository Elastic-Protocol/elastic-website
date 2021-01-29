import { Contract, BigNumber } from 'ethers';
import { isAddress } from 'ethers/lib/utils';
import { request } from 'graphql-request';

export function truncate(fullStr, strLen, separator) {
	if (!fullStr) return "...";
	if (fullStr.length <= strLen) return fullStr;

	separator = separator || '...';

	var sepLen = separator.length,
		charsToShow = strLen - sepLen,
		frontChars = Math.ceil(charsToShow / 2),
		backChars = Math.floor(charsToShow / 2);

	return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
}

export const rawFetcher = (library, abi) => async (...args) => {
	const [arg1, arg2, ...params] = args;
	if (isAddress(arg1)) {
		const address = arg1;
		const method = arg2;
		const contract = new Contract(address, abi, library);
		const data = await contract[method](...params);
		return data;
	}
};


export const poolsFetcher = (library, abi) => async (...args) => {
	const [arg1, arg2, arg3] = args;
	if (isAddress(arg1)) {
		const address = arg1;
		const method = arg2;
		const pools = arg3;
		const contract = new Contract(address, abi, library);
		const poolPromises: any[] = [];
		for (var i = 0; i < pools.length; i++) {
			poolPromises.push(contract[method](pools[i]));
		}
		const poolBalances = await Promise.all(poolPromises);
		let balanceInPools = BigNumber.from("0");
		for (var p = 0; p < poolBalances.length; p++) {
			const totalBalance = balanceInPools.add(poolBalances[p]);
			balanceInPools = totalBalance;
		}
		return balanceInPools;
	}
};

export const fetcher = (library, abi) => (...args) => {
	const [arg1, arg2, ...params] = args;
	if (isAddress(arg1)) {
		const address = arg1;
		const method = arg2;
		const contract = new Contract(address, abi, library.getSigner());
		return contract[method](...params);
	}
	const method = arg1;
	return library[method](arg2, ...params);
};

export const pairFetcher = () => (tokenQuery) => {
	return request('https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2', tokenQuery)
};
