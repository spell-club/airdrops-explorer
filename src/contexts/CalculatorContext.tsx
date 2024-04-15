import { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react'
import useClientApi from '../hooks/useClientApi'
import { AirdropDetails, CalculatorResponse } from 'api/types'
import { useDebouncedValue } from '../hooks/useDebounce'

interface CalculatorContextState {
	isDataLoaded: boolean
	isLoading: boolean
	dates: string[]
	aprs: number[]
	rewardsUSD: number[]
	totalAirdropUSD: number
	totalRewardsUSD: number
	airdropsDetails: AirdropDetails[]
	currentAmount: number
	validatorFee: number
	totalUsd: number
	roi: number
	initialAmountUsd?: number
	startDate: string
}

interface CalculatorDispatchContextState {
	setAmount: (amount: number) => void
	setValidatorFee: (fee: number) => void
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
	const [validatorFee, setValidatorFee] = useState<number>(5)
	const [calculatedData, setCalculatedData] = useState<CalculatorResponse | null>(null)
	const [isLoading, setIsLoading] = useState(false)
	const debouncedValidatorFee = useDebouncedValue(validatorFee, 300)

	console.log('calculator context render')
	const calculate = useCallback(
		async (calculateAmount: number) => {
			try {
				setIsLoading(true)
				const response = await clientApi.calculateAirdrop(calculateAmount)
				setCalculatedData(response)
			} finally {
				setIsLoading(false)
			}
		},
		[clientApi],
	)

	// data for charts
	const { dates, aprs, rewardsUSD } = useMemo(() => {
		const dates: string[] = []
		const aprs: number[] = []
		const rewardsUSD: number[] = []
		const airdrops: number[] = []

		calculatedData?.details?.forEach((data) => {
			console.log('chartData ')

			dates.push(new Date(data.date).toLocaleDateString())
			aprs.push(data.apr)
			rewardsUSD.push(data.total_usd)
			airdrops.push(data.total_airdrops_usd)
		})

		return {
			dates,
			aprs,
			rewardsUSD,
			airdrops,
		}
	}, [calculatedData?.details])

	// data for summary
	const { totalAirdropUSD, startDate, airdropsDetails, totalUsd, totalRewardsWithFee } =
		useMemo(() => {
			const lastElement = calculatedData?.details[calculatedData?.details?.length - 1]
			const totalAirdropUSD = lastElement?.total_airdrops_usd
			const totalRewardsUSD = lastElement?.total_rewards_usd
			const airdropsDetails = lastElement?.airdrops_details
			const totalRewardsWithFee =
				lastElement?.total_rewards_usd -
				(lastElement?.total_rewards_usd * debouncedValidatorFee) / 100
			const totalUsd = lastElement?.total_airdrops_usd + totalRewardsWithFee

			const startDate = calculatedData?.details[0]?.date
				? new Date(calculatedData?.details[0]?.date).toLocaleDateString()
				: '01.01.2021'

			return {
				totalAirdropUSD,
				totalRewardsUSD,
				airdropsDetails,
				totalUsd,
				totalRewardsWithFee,
				startDate,
			}
		}, [calculatedData?.details, debouncedValidatorFee])

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
			totalRewardsUSD: totalRewardsWithFee,
			airdropsDetails,
			totalUsd,
			roi: Number(calculatedData?.roi?.toFixed(2)) || 0,
			initialAmountUsd: calculatedData?.initial_investment_usd,
			startDate,
		}),
		[
			airdropsDetails,
			amount,
			aprs,
			calculatedData?.initial_investment_usd,
			calculatedData?.roi,
			dates,
			isDataLoaded,
			isLoading,
			rewardsUSD,
			totalAirdropUSD,
			totalRewardsWithFee,
			totalUsd,
			startDate,
		],
	)

	const dispatchValue = useMemo(
		() => ({
			setAmount,
			setValidatorFee,
			calculate,
			clearData,
		}),
		[setAmount, setValidatorFee, calculate, clearData],
	)

	return (
		<CalculatorContext.Provider value={{ ...value, validatorFee }}>
			<CalculatorDispatchContext.Provider value={dispatchValue}>
				{children}
			</CalculatorDispatchContext.Provider>
		</CalculatorContext.Provider>
	)
}

export { CalculatorContextProvider, useCalculatorContext, useCalculatorDispatchContext }
