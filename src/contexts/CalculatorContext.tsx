import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react'
import useClientApi from '../hooks/useClientApi'
import { useQuery } from '@tanstack/react-query'
import { AirdropDetails } from 'api/types'

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
	totalUsd: number
	roi: number
	initialAmountUsd?: number
}

interface CalculatorDispatchContextState {
	setAmount: (amount: number) => void
	setValidatorFee: (fee: number) => void
}

const CalculatorContext = createContext<CalculatorContextState>({} as CalculatorContextState)

const CalculatorDispatchContext = createContext<CalculatorDispatchContextState>(
	{} as CalculatorDispatchContextState,
)

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
	const [validatorFee, setValidatorFee] = useState<number>(0)

	const {
		data: calculateData,
		isLoading,
		isFetching,
	} = useQuery({
		queryKey: ['calculator', amount],
		queryFn: () => clientApi.calculateAirdrop(amount),
		enabled: Boolean(amount),
		refetchOnWindowFocus: false,
	})

	const {
		dates,
		aprs,
		rewardsUSD,
		totalRewardsUSD,
		totalAirdropUSD,
		airdropsDetails,
		totalUsd,
		totalRewardsWithFee,
	} = useMemo(() => {
		const dates: string[] = []
		const aprs: number[] = []
		const rewardsUSD: number[] = []
		const airdrops: number[] = []
		const lastElement = calculateData?.details[calculateData?.details?.length - 1]
		const totalAirdropUSD = lastElement?.total_airdrops_usd
		const totalRewardsUSD = lastElement?.total_rewards_usd
		const airdropsDetails = lastElement?.airdrops_details
		const totalRewardsWithFee =
			lastElement?.total_rewards_usd - (lastElement?.total_rewards_usd * validatorFee) / 100
		const totalUsd = lastElement?.total_airdrops_usd + totalRewardsWithFee

		calculateData?.details?.forEach((data) => {
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
			totalAirdropUSD,
			totalRewardsUSD,
			airdropsDetails,
			totalUsd,
			totalRewardsWithFee,
		}
	}, [calculateData?.details, validatorFee])

	const isDataLoaded = calculateData?.details?.length > 0 && !isLoading

	return (
		<CalculatorContext.Provider
			value={{
				currentAmount: amount,
				isDataLoaded,
				dates,
				aprs,
				isLoading: isLoading || isFetching,
				rewardsUSD,
				totalAirdropUSD,
				totalRewardsUSD: totalRewardsWithFee,
				airdropsDetails,
				totalUsd,
				roi: Number(calculateData?.roi?.toFixed(2)) || 0,
				initialAmountUsd: calculateData?.initial_investment_usd,
			}}
		>
			<CalculatorDispatchContext.Provider value={{ setAmount, setValidatorFee }}>
				{children}
			</CalculatorDispatchContext.Provider>
		</CalculatorContext.Provider>
	)
}

export { CalculatorContextProvider, useCalculatorContext, useCalculatorDispatchContext }
