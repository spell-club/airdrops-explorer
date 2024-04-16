import { Flex, Text, useColorModeValue } from '@chakra-ui/react'

import Card from 'components/card/Card'
import { DonutChart } from 'components/UI/charts'
import { VSeparator } from 'components/UI/separator'

const DropConversionChartCardError = () => {
	const bg = useColorModeValue('whiteAlpha.800', 'navy.800')

	return (
		<Card p="20px" alignItems="center" flexDirection="column" w="100%" bg={bg}>
			<Flex flexDir="column" align="center" gap={4}>
				<Text fontSize={20} fontWeight={600}>
					Allocation Info
				</Text>
				<Flex gap={5}>
					<Flex flexDir="column" align="center" gap={4}>
						<DonutChart value={0}>
							<Flex flexDir="column" align="center">
								<Text color="gray.400" fontSize={14}>
									Claimed Amount
								</Text>
								<Text fontSize={20} fontWeight={600}>
									No data
								</Text>
							</Flex>
						</DonutChart>
					</Flex>
				</Flex>

				<Flex
					gap={5}
					px={10}
					py={4}
					boxShadow="rgba(112, 144, 176, 0.08) 4px 1px 10px 4px"
					borderRadius={20}
				>
					<Flex flexDir="column" gap={5}>
						<Flex flexDir="column" align="center">
							<Text fontSize={14} color="gray.400">
								Allocated $
							</Text>
							<Text fontSize={20} fontWeight={600}>
								$0
							</Text>
						</Flex>

						<Flex flexDir="column" align="center">
							<Text fontSize={14} color="gray.400">
								Allocated
							</Text>
							<Text fontSize={20} fontWeight={600}>
								0
							</Text>
						</Flex>
					</Flex>

					<VSeparator />

					<Flex flexDir="column" gap={5}>
						<Flex flexDir="column" align="center">
							<Text fontSize={14} color="gray.400">
								Claimed $
							</Text>
							<Text fontSize={20} fontWeight={600}>
								$0
							</Text>
						</Flex>

						<Flex flexDir="column" align="center">
							<Text fontSize={14} color="gray.400">
								Claimed
							</Text>
							<Text fontSize={20} fontWeight={600}>
								0
							</Text>
						</Flex>
					</Flex>

					<VSeparator />

					<Flex flexDir="column" gap={5}>
						<Flex flexDir="column" align="center">
							<Text fontSize={14} color="gray.400">
								Missed $
							</Text>
							<Text fontSize={20} fontWeight={600}>
								$0
							</Text>
						</Flex>
						<Flex flexDir="column" align="center">
							<Text fontSize={14} color="gray.400">
								Missed
							</Text>
							<Text fontSize={20} fontWeight={600}>
								0
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Card>
	)
}

export default DropConversionChartCardError
