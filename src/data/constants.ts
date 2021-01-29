export const erc20Abi = [
	'function name() view returns (string)',
	'function symbol() view returns (string)',
	'function balanceOf(address) view returns (uint)',
	'function totalSupply() view returns (uint256)',
	'function transfer(address to, uint amount)',
	'function approve(address spender, uint value) external returns (bool)',
	'function allowance(address owner, address spender) external view returns (uint256)',
	'event Transfer(address indexed from, address indexed to, uint amount)'
];

export const poolAbi = [
	'function rewardPerToken() public view returns (uint256)',
	'function estimatedRewards(address account) public view returns (uint)',
	'function totalRewardsPaid() public view returns(uint256)',
	
	'function initReward() public view returns(uint256)',
	'function rewardRate() public view returns(uint256)',
	'function exit()',
	'function withdrawRewards()',

	'function stake(uint256 amount)',
	'function unstake(uint256 amount)',
	'function balanceOf(address account) public view returns (uint256)',
	'function startTime() public view returns(uint256)',
	'function periodDuration() public view returns(uint256)',
	'function periodFinishTime() public view returns(uint256)',
];

export const contractAddress = {
  inr: '0xb229fef67881d34804d47b29f6da70953548c782',
  inrWethLpPool: '0x30163316026edc8a6d189319d81a7FB8a3233675',
};

export const pairId = {
  inr: '0xe98f89a2b3aecdbe2118202826478eb02434459a',
};

export const startTime = 1610337987;

export const network = 'ropsten';

export const DOCS_ADDRESS = 'https://docs.elastic.supply/';

export const GIT_ADDRESS = 'https://github.com/elastic-protocol';

export const DISCORD_ADDRESS = 'https://www.discord.com';

export const TELEGRAM_ADDRESS = 'https://www.telegram.com';

export const TWITTER_ADDRESS = 'https://www.twitter.com';

export const MEDIUM_ADDRESS = 'https://www.medium.com';

export const explorer = 'https://ropsten.etherscan.io/';

export const uniswap_swap = (inputCurrency, outputCurrency) => 
	`https://app.uniswap.org/#/swap?inputCurrency=${inputCurrency}&outputCurrency=${outputCurrency}`;

export const uniswap_add = (pairContract, tokenContract) => `https://app.uniswap.org/#/add/${pairContract}/${tokenContract}`;

export const uniswap_token = (contract) => `https://info.uniswap.org/token/${contract}`;

export const uniswap_pair = (pairId) => `https://info.uniswap.org/pair/${pairId}`;