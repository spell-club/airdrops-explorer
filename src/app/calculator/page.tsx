'use client'
import { Box, Flex } from '@chakra-ui/react'
import { useCalculatorContext, useCalculatorDispatchContext } from 'contexts/CalculatorContext'
import FormAndSummaryWrapper from 'components/calculator/FormAndSummaryWrapper'
import CalculatorText from 'components/calculator/CalculatorText'
import useAirdrops from 'hooks/useAirdrops'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'

const AprChart = dynamic(() => import('components/calculator/AprChart'), {
	ssr: false,
})
const RewardsChart = dynamic(() => import('components/calculator/RewardsChart'), {
	ssr: false,
})

const Page = () => {
	const { isDataLoaded, aprs, rewardsUSD, dates } = useCalculatorContext()
	const { clearData } = useCalculatorDispatchContext()
	// initial projects loading
	const {} = useAirdrops()

	useEffect(() => {
		return () => {
			clearData()
		}
	}, [])

	return (
		<Box as="section" mb="20px">
			<Box
				opacity="1"
				bgImage="radial-gradient(#a378e1 1.1px, #000614 1.1px)"
				bgSize="22px 22px"
				borderRadius="20px"
				h="150px"
				w="100%"
			/>
			<Flex w="100%" justify="center" mt={-20} mb="20px">
				<FormAndSummaryWrapper />
			</Flex>

			<Flex
				gap={5}
				w="100%"
				flexWrap={{ base: 'wrap', xl: 'nowrap' }}
				display={isDataLoaded ? 'flex' : 'none'}
			>
				<AprChart dates={dates} values={aprs} />

				<RewardsChart dates={dates} values={rewardsUSD} />
			</Flex>

			<CalculatorText />
		</Box>
	)
}

export default Page
