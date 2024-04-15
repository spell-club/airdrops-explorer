import Card from '../card/Card'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useCalculatorContext } from 'contexts/CalculatorContext'
import { daysAgoFromDate, formatValue } from 'utils'
import useAirdropsDates from '../../hooks/useAirdropsDates'

const CalculatorSummary = () => {
	const { roi, totalRewardsUSD, airdropsDetails, totalUsd, startDate } = useCalculatorContext()
	const { airdropsDates } = useAirdropsDates()

	console.log('calculator summary render')
	return (
		<Card w="100%" alignItems="center">
			<Box w="500px">
				<Flex flexDir="column" w="100%" gap={5}>
					<Flex p={5} borderRadius={16} bg="navy.900" justify="space-between">
						<Flex flexDir="column" align="center">
							<Text fontSize={18} color="gray.400">
								Total Rewards
							</Text>

							<Text fontSize={32} fontWeight={600}>
								$ {formatValue(totalUsd, 0)}
							</Text>
						</Flex>

						<Flex flexDir="column" align="center">
							<Text fontSize={18} color="gray.400">
								ROI
							</Text>
							<Text fontSize={32} fontWeight={600}>
								{roi} %
							</Text>
						</Flex>
					</Flex>

					<Box>
						<Text>Rewards breakdown</Text>
						<Flex justify="center" mt={4} w="100%">
							<Flex flexDir="column" gap={4} w="100%">
								<Flex key="staking" align="center" justify="space-between" w="100%">
									<Flex gap={2.5} align="center" minW={130}>
										<Flex flexDir="column">
											<Text fontSize={18}>Atom Staking</Text>
											<Text fontSize={12} color="gray.400">
												1 day ago
											</Text>
										</Flex>
									</Flex>

									<Box minW="80px">
										<Text fontSize={20} fontWeight={600}>
											+${formatValue(totalRewardsUSD, 0)}
										</Text>
									</Box>
								</Flex>

								{airdropsDetails.map((airdrop) => {
									const airdropDate = airdropsDates?.find(
										(el) => el.name.toLowerCase() === airdrop.name.toLowerCase(),
									)?.date

									const daysAgo = airdropDate ? daysAgoFromDate(airdropDate) : 'N/A'
									return (
										<Flex key={airdrop.name} align="center" justify="space-between" w="100%">
											<Flex gap={2.5} align="center" minW={130}>
												<Flex flexDir="column">
													<Text fontSize={18}>{airdrop.name} Airdrop</Text>
													<Text fontSize={12} color="gray.400">
														{daysAgo}
													</Text>
												</Flex>
											</Flex>

											<Box minW="80px">
												<Text fontSize={20} fontWeight={600}>
													+${formatValue(airdrop.amount_usd, 0)}
												</Text>
											</Box>
										</Flex>
									)
								})}
							</Flex>
						</Flex>
					</Box>
				</Flex>
			</Box>
		</Card>
	)
}

export default CalculatorSummary
