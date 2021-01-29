import React, { useState, useEffect, useRef } from 'react';
import { useWeb3React } from '@web3-react/core';
import useSWR from 'swr';
import { fetcher } from '../../../../data/utils';
import { poolAbi, erc20Abi } from '../../../../data/constants';
import NumberFormat from 'react-number-format';
import { Contract } from 'ethers';
import { formatEther, formatUnits, parseUnits } from 'ethers/lib/utils';
import { Col, Row, message } from 'antd';
import PoolInput from './PoolInput/PoolInput';
import "./StakeView.scss";

const WalletStat = ({ label, value, token }) => (
  <div className="WalletStat">
    <p className="WalletStat__label">{label}</p>
    <p className="WalletStat__value">{value} <span className="WalletStat__token">{token}</span></p>
  </div>
)

const StakeView = ({ stakeView, tokenAddress, poolAddress, stakeToken }) => {
  const stakeRef = useRef<HTMLInputElement>();
	const withdrawRef = useRef<HTMLInputElement>();

  const { account, library } = useWeb3React();

	const { data: tokenBalance, mutate: getTokenBalance } = useSWR([ tokenAddress, 'balanceOf', account ], {
		fetcher: fetcher(library, poolAbi)
  });
  
  const { data: stakeBalance, mutate: getStakeBalance } = useSWR([ poolAddress, 'balanceOf', account ], {
		fetcher: fetcher(library, poolAbi)
  });
  
  const { data: rewardBalance, mutate: getRewardBalance } = useSWR([ poolAddress, 'estimatedRewards' ], {
		fetcher: fetcher(library, poolAbi)
  });

  useEffect(
		() => {
			library.on('block', () => {
        getTokenBalance(undefined, true);
        getStakeBalance(undefined, true);
        getRewardBalance(undefined, true);
			});
			return () => {
				library.removeAllListeners('block');
			};
		},
		[ library, getTokenBalance, getStakeBalance, getRewardBalance ]
  );

  const [ stakingLoading, setStakingLoading ] = useState(false);
	const [ withdrawLoading, setWithdrawLoading ] = useState(false);
	const [ claimLoading, setClaimLoading ] = useState(false);
	const [ claimUnstakeLoading, setClaimUnstakeLoading ] = useState(false);

  
  async function handleStake() {
		setStakingLoading(true);
		const tokenContract = new Contract(tokenAddress, erc20Abi, library.getSigner());
		const poolContract = new Contract(poolAddress, poolAbi, library.getSigner());
		try {
      const input = stakeRef.current;
      const toStake = input ? parseUnits(input.value, 18) : 0;
			let allowance = await tokenContract.allowance(account, poolAddress);
			let transaction;
			if (allowance.lt(toStake)) {
				transaction = await tokenContract.approve(poolAddress, toStake);
				await transaction.wait(1);
			}
			transaction = await poolContract.stake(toStake);
			await transaction.wait(1);

			let newTokenBal = await tokenContract.balanceOf(account);
			let newStakeBal = await poolContract.balanceOf(account);

			await getStakeBalance(newStakeBal);
			await getTokenBalance(newTokenBal);

			message.success('Staking successfully executed');
		} catch (error) {
			message.error('Staking failed, please try again');
		}
		setStakingLoading(false);
  }
  
  async function handleWithdraw() {
		setWithdrawLoading(true);
		const tokenContract = new Contract(tokenAddress, erc20Abi, library.getSigner());
		const poolContract = new Contract(poolAddress, poolAbi, library.getSigner());
		try {
      const input = withdrawRef.current;
			const toWithdraw = input ? parseUnits(input.value, 18) : 0;
			let transaction = await poolContract.unstake(toWithdraw);
			await transaction.wait(1);

			let newTokenBal = await tokenContract.balanceOf(account);
			let newStakeBal = await poolContract.balanceOf(account);
			await getTokenBalance(newTokenBal);
			await getStakeBalance(newStakeBal);

			message.success('Unstake successfully executed');
		} catch (error) {
      console.log(error)
			message.error('Unstake failed, please try again');
		}
		setWithdrawLoading(false);
  }
  
  async function claimReward() {
		setClaimLoading(true);
		const poolContract = new Contract(poolAddress, poolAbi, library.getSigner());
		try {
			const transaction = await poolContract.withdrawRewards();
			await transaction.wait(1);

			let newRewardBal = await poolContract.estimatedRewards(account);
			await getRewardBalance(newRewardBal);

			message.success('Claim reward successful');
		} catch (error) {
			message.error('Claim reward failed, please try again');
		}
		setClaimLoading(false);
	}

	async function claimRewardThenUnstake() {
		setClaimUnstakeLoading(true);
		const poolContract = new Contract(poolAddress, poolAbi, library.getSigner());
		const tokenContract = new Contract(tokenAddress, erc20Abi, library.getSigner());

		try {
			const transaction = await poolContract.exit();
			await transaction.wait(1);

			let newTokenBal = await tokenContract.balanceOf(account);
			let newStakeBal = await poolContract.balanceOf(account);
			let newRewardBal = await poolContract.estimatedRewards(account);

			await getStakeBalance(newStakeBal);
			await getTokenBalance(newTokenBal);
			await getRewardBalance(newRewardBal);

			message.success('Claim and unstake successfully executed');
		} catch (error) {
      console.log(error)
			message.error('Claim and unstake failed, please try again');
		}
		setClaimUnstakeLoading(false);
  }

  switch (stakeView) {
    case 'a': return (
      <Col span={24}>
        <Row gutter={[16, 16]}>
          <Col lg={{ span: 12 }} xs={{ span: 24}}>
            <WalletStat 
              label={"Currently staked"}
              value={
                <NumberFormat
                  value={stakeBalance !== undefined ? formatUnits(stakeBalance, 18) : 0} 
                  displayType={'text'} 
                  thousandSeparator={true} 
                  decimalScale={6}
                />
              }
              token={stakeToken}
            />
          </Col>
          <Col lg={{ span: 12 }} xs={{ span: 24}}>
            <WalletStat 
              label={"Wallet balance"}
              value={
                <NumberFormat
                  value={tokenBalance !== undefined ? formatUnits(tokenBalance, 18) : 0} 
                  displayType={'text'} 
                  thousandSeparator={true} 
                  decimalScale={6}
                />
              }
              token={stakeToken}
            />
          </Col>
        </Row>
        <PoolInput
          action={handleStake}
          loading={stakingLoading}
          buttonText="Stake"
          ref={stakeRef}
          balance={tokenBalance}
          placeholderText="Enter stake amount"
          unit={18}
        />
      </Col>
    )
    case 'b': return (
      <Col span={24}>
        <Row gutter={[16, 16]}>
          <Col lg={{ span: 12 }} xs={{ span: 24}}>
            <WalletStat 
              label={"Rewards available"}
              value={
                <NumberFormat
                  value={rewardBalance !== undefined ? formatEther(rewardBalance) : 0}
                  displayType={'text'} 
                  thousandSeparator={true} 
                  decimalScale={6}
                />
              }
              token={stakeToken}
            />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <button 
              className={
                claimLoading ? (
                  'Btn Btn--primary StakeView__action'
                ) : (
                  'Btn Btn--secondary StakeView__action'
                )
              }
              onClick={() => !claimLoading && claimReward()}
              disabled={claimLoading}
            >
              {!claimLoading ? "Claim" : "Loading..."}
            </button>
          </Col>
        </Row>
      </Col>
    )
    case 'c': return (
      <Col span={24}>
        <Row gutter={[16, 16]}>
          <Col lg={{ span: 12 }} xs={{ span: 24}}>
            <WalletStat 
              label={"Currently staked"}
              value={
                <NumberFormat
                  value={stakeBalance !== undefined ? formatUnits(stakeBalance, 18) : 0} 
                  displayType={'text'} 
                  thousandSeparator={true} 
                  decimalScale={6}
                />
              }
              token={stakeToken}
            />
          </Col>
        </Row>
        <PoolInput
          action={handleWithdraw}
          loading={withdrawLoading}
          buttonText="Unstake"
          ref={withdrawRef}
          balance={stakeBalance}
          placeholderText="Unstake Amount"
          unit={18}
        />
      </Col>
    )
    case 'd': return (
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col lg={{ span: 12 }} xs={{ span: 24}}>
              <WalletStat 
                label={"Currently staked"}
                value={
                  <NumberFormat
                    value={stakeBalance !== undefined ? formatUnits(stakeBalance, 18) : 0} 
                    displayType={'text'} 
                    thousandSeparator={true} 
                    decimalScale={8}
                  />
                }
                token={stakeToken}
              />
            </Col>
            <Col lg={{ span: 12 }} xs={{ span: 24}}>
              <WalletStat 
                label={"Rewards available"}
                value={
                  <NumberFormat
                    value={rewardBalance !== undefined ? formatEther(rewardBalance) : 0}
                    displayType={'text'} 
                    thousandSeparator={true} 
                    decimalScale={8}
                  />
                }
                token={stakeToken}
              />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <button 
                className={
                  claimUnstakeLoading ? (
                    'Btn Btn--primary StakeView__action'
                  ) : (
                    'Btn Btn--secondary StakeView__action'
                  )
                }
                onClick={() => !claimUnstakeLoading && claimRewardThenUnstake()}
                disabled={claimUnstakeLoading}
              >
                {!claimUnstakeLoading ? <>Claim &amp; Unstake</> : "Loading..."}
              </button>
            </Col>
          </Row>
        </Col>
        
    )
    default: return null
  }
}

export default StakeView;