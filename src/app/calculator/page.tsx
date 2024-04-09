'use client'
import { Box, Flex, Text } from '@chakra-ui/react'
import CalculatorForm from 'components/calculator/CalculatorForm'
import Card from 'components/card/Card'
import { useCalculatorContext } from 'contexts/CalculatorContext'
import AprChart from 'components/calculator/AprChart'
import RewardsChart from 'components/calculator/RewardsChart'
import CalculatorTable from 'components/calculator/CalculatorTable'

const Page = () => {
	const { isLoading, isDataLoaded, aprs, rewardsUSD, dates } = useCalculatorContext()

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
			<Flex w="100%" justify="center" mt={-20}>
				<Card w="50%" alignItems="center" mb="20px" display="flex" flexDir="column" gap={8}>
					<Flex flexDir="column">
						<Text fontSize={32} fontWeight={600} mb="10px" textAlign="center">
							Staking Reward Calculator
						</Text>
						<Text>
							Unlock the potential of your staked coins with our Coin Staking Reward Calculator.
							Easily input the number of coins you&apos;ve staked (Atoms) and discover the rewards
							you could earn over time. Whether you&apos;re a seasoned investor or just getting
							started, our calculator provides clear insights into the rewards awaiting you. Make
							informed decisions and maximize your staking rewards with ease. Try it now!
						</Text>
					</Flex>

					<CalculatorForm />
				</Card>
			</Flex>

			{isDataLoaded && aprs.length && rewardsUSD.length ? (
				<Flex flexDir="column" gap={5} align="center">
					<Box w="50%">
						<CalculatorTable />
					</Box>
					<Flex gap={5} w="100%">
						<AprChart dates={dates} values={aprs} />

						<RewardsChart dates={dates} values={rewardsUSD} />
					</Flex>
				</Flex>
			) : null}
		</Box>
	)
}

export default Page
