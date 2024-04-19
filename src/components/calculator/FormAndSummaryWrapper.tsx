import { Box, Flex, Text } from '@chakra-ui/react'
import Card from '../card/Card'
import CalculatorForm from './CalculatorForm'
import CalculatorSummary from './CalculatorSummary'
import { useMemo, useState } from 'react'
import { useCalculatorContext } from 'contexts/CalculatorContext'
import useAirdropsDates from 'hooks/useAirdropsDates'

const FormAndSummaryWrapper = () => {
	const [validatorFee, setValidatorFee] = useState(5)
	const { totalStakingRewardsUSD, totalAirdropUSD, isDataLoaded } = useCalculatorContext()
	const { airdropsDates } = useAirdropsDates()

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
						ROI Calculator
					</Text>
					<Text>
						Unlock the potential of your staked tokens with our Return on Investment (ROI)
						Calculator. Simply input the number of tokens you&apos;ve staked (ATOM) and discover the
						earnings you could have accumulated over time, including staking rewards and Airdrops.
						Whether you&apos;re a seasoned investor or just getting started, our calculator provides
						clear insights into the potential income you could earn by staking ATOM. Make informed
						decisions and maximize your crypto assets with ease. Try it now!
					</Text>
				</Flex>

				<CalculatorForm validatorFee={validatorFee} setValidatorFee={setValidatorFee} />
			</Card>

			{isDataLoaded ? (
				<Box w="100%">
					<CalculatorSummary
						airdropsDates={airdropsDates}
						totalStakingRewardsUSD={totalStakingRewardsWithFee}
						totalUsd={totalUsd}
					/>
				</Box>
			) : null}
		</Flex>
	)
}

export default FormAndSummaryWrapper
