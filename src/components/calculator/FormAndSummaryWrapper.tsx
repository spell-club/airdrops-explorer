import { Box, Flex, Text } from '@chakra-ui/react'
import Card from '../card/Card'
import CalculatorForm from './CalculatorForm'
import CalculatorSummary from './CalculatorSummary'
import { useMemo, useState } from 'react'
import { useCalculatorContext } from 'contexts/CalculatorContext'

const FormAndSummaryWrapper = () => {
	const [validatorFee, setValidatorFee] = useState(5)
	const { totalStakingRewardsUSD, totalAirdropUSD, isDataLoaded } = useCalculatorContext()

	const { totalUsd, totalStakingRewardsWithFee } = useMemo(() => {
		const totalStakingRewardsWithFee =
			totalStakingRewardsUSD - (totalStakingRewardsUSD * validatorFee) / 100
		const totalUsd = totalAirdropUSD + totalStakingRewardsWithFee

		return {
			totalUsd,
			totalStakingRewardsWithFee,
		}
	}, [totalAirdropUSD, totalStakingRewardsUSD, validatorFee])

	return (
		<Flex flexDir="column" align="center" w={{ base: 'auto', md: '75%', lg: '50%' }}>
			<Card alignItems="center" mb="20px" display="flex" flexDir="column" gap={8}>
				<Flex flexDir="column">
					<Text fontSize={32} fontWeight={600} mb="10px" textAlign="center">
						Staking Reward Calculator
					</Text>
					<Text>
						Unlock the potential of your staked coins with our Coin Staking Reward Calculator.
						Easily input the number of coins you&apos;ve staked (Atoms) and discover the rewards you
						could earn over time. Whether you&apos;re a seasoned investor or just getting started,
						our calculator provides clear insights into the rewards awaiting you. Make informed
						decisions and maximize your staking rewards with ease. Try it now!
					</Text>
				</Flex>

				<CalculatorForm validatorFee={validatorFee} setValidatorFee={setValidatorFee} />
			</Card>

			{isDataLoaded ? (
				<Box w="100%">
					<CalculatorSummary
						totalStakingRewardsUSD={totalStakingRewardsWithFee}
						totalUsd={totalUsd}
					/>
				</Box>
			) : null}
		</Flex>
	)
}

export default FormAndSummaryWrapper
