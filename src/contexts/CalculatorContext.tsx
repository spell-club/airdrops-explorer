import { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react'
import useClientApi from '../hooks/useClientApi'
import { AirdropDetails, CalculatorResponse } from '../api/types'

interface CalculatorContextState {
	isDataLoaded: boolean
	isLoading: boolean
	dates: string[]
	aprs: number[]
	rewardsUSD: number[]
	totalAirdropUSD: number
	totalStakingRewardsUSD: number
	airdropsDetails: AirdropDetails[]
	currentAmount: number
	roi: number
	initialAmountUsd?: number
	startDate: string
}

interface CalculatorDispatchContextState {
	setAmount: (amount: number) => void
	calculate: (amount: number) => void
	clearData: () => void
}

const CalculatorContext = createContext<Partial<CalculatorContextState>>({})

const CalculatorDispatchContext = createContext<Partial<CalculatorDispatchContextState>>({})

const useCalculatorContext = () => {
	const context = useContext(CalculatorContext)
	if (!Object.keys(context).length) {
		throw new Error('useCalculatorContext must be used within a CalculatorProvider')
	}

	return context
}

const useCalculatorDispatchContext = () => {
	const context = useContext(CalculatorDispatchContext)
	if (!Object.keys(context).length) {
		throw new Error('useCalculatorDispatchContext must be used within a CalculatorProvider')
	}

	return context
}

const CalculatorContextProvider = ({ children }: PropsWithChildren) => {
	const { clientApi } = useClientApi()
	const [amount, setAmount] = useState<number>(0)
	const [calculatedData, setCalculatedData] = useState<CalculatorResponse | null>(null)
	const [isLoading, setIsLoading] = useState(false)

	const calculate = useCallback(
		async (calculateAmount: number) => {
			try {
				setIsLoading(true)
				const response = await clientApi.calculateAirdrop(calculateAmount)
				setCalculatedData(response)
			} catch (e) {
				setCalculatedData(null)
				console.error(e)
			} finally {
				setIsLoading(false)
			}
		},
		[clientApi],
	)

	// data for charts
	const { dates, aprs, rewardsUSD } = useMemo(() => {
		const dates: string[] =
			calculatedData?.details.map((data) => new Date(data.date).toLocaleDateString()) || []
		const aprs: number[] = calculatedData?.details.map((data) => data.apr) || []
		const rewardsUSD: number[] = calculatedData?.details.map((data) => data.total_usd) || []
		const airdrops: number[] = calculatedData?.details.map((data) => data.total_airdrops_usd) || []

		return {
			dates,
			aprs,
			rewardsUSD,
			airdrops,
		}
	}, [calculatedData?.details])

	// data for summary
	const { totalAirdropUSD, startDate, airdropsDetails, totalRewardsUSD } = useMemo(() => {
		const lastElement = calculatedData?.details[calculatedData?.details?.length - 1]
		const totalAirdropUSD = lastElement?.total_airdrops_usd
		const totalRewardsUSD = lastElement?.total_rewards_usd
		const airdropsDetails = lastElement?.airdrops_details

		const startDate = calculatedData?.details[0]?.date
			? new Date(calculatedData?.details[0]?.date).toLocaleDateString()
			: '01.01.2021'

		return {
			totalAirdropUSD,
			totalRewardsUSD,
			airdropsDetails,
			totalStakingRewardsUSD: totalRewardsUSD,
			startDate,
		}
	}, [calculatedData?.details])

	const isDataLoaded = calculatedData?.details?.length > 0 && !isLoading

	const clearData = useCallback(() => {
		setCalculatedData(null)
	}, [])

	const value = useMemo(
		() => ({
			currentAmount: amount,
			isDataLoaded,
			dates,
			aprs,
			isLoading,
			rewardsUSD,
			totalAirdropUSD,
			totalStakingRewardsUSD: totalRewardsUSD,
			airdropsDetails,
			roi: Number(calculatedData?.roi?.toFixed(0)) || 0,
			initialAmountUsd: calculatedData?.initial_investment_usd,
			startDate,
		}),
		[
			amount,
			isDataLoaded,
			dates,
			aprs,
			isLoading,
			rewardsUSD,
			totalAirdropUSD,
			totalRewardsUSD,
			airdropsDetails,
			calculatedData?.roi,
			calculatedData?.initial_investment_usd,
			startDate,
		],
	)

	const dispatchValue = useMemo(
		() => ({
			setAmount,
			calculate,
			clearData,
		}),
		[setAmount, calculate, clearData],
	)

	return (
		<CalculatorContext.Provider value={{ ...value }}>
			<CalculatorDispatchContext.Provider value={dispatchValue}>
				{children}
			</CalculatorDispatchContext.Provider>
		</CalculatorContext.Provider>
	)
}

export { CalculatorContextProvider, useCalculatorContext, useCalculatorDispatchContext }
