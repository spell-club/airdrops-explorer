'use client'
import { Box, Flex } from '@chakra-ui/react'
import { useCalculatorContext } from 'contexts/CalculatorContext'
import AprChart from 'components/calculator/AprChart'
import RewardsChart from 'components/calculator/RewardsChart'
import FormAndSummaryWrapper from 'components/calculator/FormAndSummaryWrapper'

const Page = () => {
	const { isDataLoaded, aprs, rewardsUSD, dates } = useCalculatorContext()

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

			{isDataLoaded ? (
				<Flex gap={5} w="100%" flexWrap={{ base: 'wrap', xl: 'nowrap' }}>
					<AprChart dates={dates} values={aprs} />

					<RewardsChart dates={dates} values={rewardsUSD} />
				</Flex>
			) : null}
		</Box>
	)
}

export default Page
