import { Flex, Text, useColorModeValue } from '@chakra-ui/react'
import numbro from 'numbro'

import Card from 'components/card/Card'
import { DonutChart } from 'components/UI/charts'
import { VSeparator } from 'components/UI/separator'
import { roundToPrecision } from 'utils'
import { AirdropProject } from 'api/types'
import DropConversionChartCardError from './DropConversionChartCardError'

const formatValue = (value: number) => {
	const truncatedAmount = roundToPrecision({
		value,
		precision: 0,
		method: 'floor',
	})

	const roundFormat = {
		trimMantissa: true,
		thousandSeparated: true,
	}

	return String(numbro(truncatedAmount).format(roundFormat))
}

interface Props {
	project: AirdropProject
}

interface StatsWrapperProps {
	firstTitle: string
	firstValue: number
	secondTitle: string
	secondValue: number
}
const StatsWrapper = ({ firstTitle, secondTitle, secondValue, firstValue }: StatsWrapperProps) => (
	<Flex flexDir="column" gap={5}>
		<Flex flexDir="column" align="center">
			<Text fontSize={14} color="gray.400">
				{firstTitle}
			</Text>
			<Text fontSize={{ base: 16, md: 20 }} fontWeight={600}>
				${formatValue(firstValue)}
			</Text>
		</Flex>

		<Flex flexDir="column" align="center">
			<Text fontSize={14} color="gray.400">
				{secondTitle}
			</Text>
			<Text fontSize={{ base: 16, md: 20 }} fontWeight={600}>
				{formatValue(secondValue)}
			</Text>
		</Flex>
	</Flex>
)

const DropConversionChartCard = ({ project }: Props) => {
	const bg = useColorModeValue('whiteAlpha.800', 'navy.800')

	if (!project) {
		return <DropConversionChartCardError />
	}

	const {
		total_allocated: totalAllocated,
		total_claimed: totalClaimed,
		total_claimed_usd: totalClaimedUsd,
		total_allocated_usd: totalAllocatedUsd,
		token_symbol: tokenSymbol,
		total_reallocated,
		total_reallocated_usd,
		eligible_users_num: eligibleUsersNum,
		claimers_num: claimersNum,
	} = project

	const conversion = roundToPrecision({
		value: (totalClaimedUsd / totalAllocatedUsd) * 100,
		precision: 2,
		method: 'floor',
	})

	const isRelocatedStatExist = total_reallocated && total_reallocated_usd

	const claimersRate = roundToPrecision({
		value: (claimersNum / eligibleUsersNum) * 100,
		precision: 2,
		method: 'floor',
	})

	return (
		<Card p="20px" alignItems="center" flexDirection="column" w="100%" bg={bg}>
			<Flex flexDir="column" align="center" gap={4}>
				<Text fontSize={20} fontWeight={600}>
					Allocation Info
				</Text>
				<Flex gap={5} flexDir={{ base: 'column', md: 'row' }}>
					<Flex flexDir="column" align="center" gap={4}>
						<DonutChart value={conversion}>
							<Flex flexDir="column" align="center">
								<Text color="gray.400" fontSize={14}>
									Claimed Amount
								</Text>
								<Text fontSize={20} fontWeight={600}>
									{conversion}%
								</Text>
							</Flex>
						</DonutChart>
					</Flex>

					{isRelocatedStatExist && (
						<DonutChart value={claimersRate} color="#39B8FF">
							<Flex flexDir="column" align="center">
								<Text color="gray.400" fontSize={14}>
									Claimers
								</Text>
								<Text fontSize={20} fontWeight={600}>
									{claimersRate}%
								</Text>
							</Flex>
						</DonutChart>
					)}
				</Flex>

				{isRelocatedStatExist ? (
					<Flex
						gap={{ base: 2, md: 5 }}
						px={{ base: 2, md: 10 }}
						py={4}
						boxShadow="rgba(112, 144, 176, 0.08) 4px 1px 10px 4px"
						borderRadius={20}
					>
						<Flex flexDir="column" gap={5}>
							<StatsWrapper
								firstTitle="Allocated $"
								firstValue={totalAllocatedUsd}
								secondTitle={`Allocated ${tokenSymbol}`}
								secondValue={totalAllocated}
							/>
							<StatsWrapper
								firstTitle="Reallocated $"
								firstValue={total_reallocated_usd}
								secondTitle={`Reallocated ${tokenSymbol}`}
								secondValue={total_reallocated}
							/>
						</Flex>

						<VSeparator />

						<Flex flexDir="column" gap={5}>
							<StatsWrapper
								firstTitle="Claimed $"
								firstValue={totalClaimedUsd}
								secondTitle={`Claimed ${tokenSymbol}`}
								secondValue={totalClaimed}
							/>

							<StatsWrapper
								firstTitle="Missed $"
								firstValue={totalAllocatedUsd - totalClaimedUsd}
								secondTitle={`Missed ${tokenSymbol}`}
								secondValue={totalAllocated - totalClaimed}
							/>
						</Flex>
					</Flex>
				) : (
					<Flex
						gap={{ base: 2, md: 5 }}
						px={{ base: 2, md: 10 }}
						py={4}
						boxShadow="rgba(112, 144, 176, 0.08) 4px 1px 10px 4px"
						borderRadius={20}
					>
						<StatsWrapper
							firstTitle="Allocated $"
							firstValue={totalAllocatedUsd}
							secondTitle={`Allocated ${tokenSymbol}`}
							secondValue={totalAllocated}
						/>

						<VSeparator />

						<StatsWrapper
							firstTitle="Claimed $"
							firstValue={totalClaimedUsd}
							secondTitle={`Claimed ${tokenSymbol}`}
							secondValue={totalClaimed}
						/>

						<VSeparator />

						<StatsWrapper
							firstTitle="Missed $"
							firstValue={totalAllocatedUsd - totalClaimedUsd}
							secondTitle={`Missed ${tokenSymbol}`}
							secondValue={totalAllocated - totalClaimed}
						/>
					</Flex>
				)}
			</Flex>
		</Card>
	)
}

export default DropConversionChartCard
