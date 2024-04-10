import React, { useMemo, useState } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import Card from '../card/Card'
import LineChart from '../charts/LineChart'
import useClientApi from '../../hooks/useClientApi'
import { useQuery } from '@tanstack/react-query'
import { roundToPrecision } from '../../utils'
import useDefaultChartConfig from '../../hooks/useDefaultChartConfig'
import SelectTimelineMenu from '../SelectTimelineMenu'
import useAirdropsDates from '../../hooks/useAirdropsDates'

interface Props {
	address: string
}

const ClaimedUnclaimedChart = ({ address }: Props) => {
	const { chartConfig, ovewriteCategories, timeCategories } = useDefaultChartConfig()
	const { clientApi } = useClientApi()
	const { data: chartData, isLoading: isChartDataLoading } = useQuery({
		queryKey: ['claimHistory'],
		queryFn: () => clientApi.getClaimHistoricalValue(address),
	})

	const [selectedTime, setSelectedTime] = useState(timeCategories[0])
	const { airdropsLabelsForChart } = useAirdropsDates()

	const dataByTime = useMemo(() => {
		if (!chartData) return []

		return chartData.slice(-selectedTime.value)
	}, [chartData, selectedTime])

	const { claimedArray, unclaimedArray } = useMemo(() => {
		const claimedArray: number[] = []
		const unclaimedArray: number[] = []

		dataByTime.forEach((data) => {
			claimedArray.push(roundToPrecision({ value: data.claimed_amount_usd, precision: 2 }))
			unclaimedArray.push(roundToPrecision({ value: data.allocated_amount_usd, precision: 2 }))
		})

		return { claimedArray, unclaimedArray }
	}, [dataByTime])

	const datesArray = dataByTime?.map((data) => new Date(data.date).toLocaleDateString())

	return (
		<Card justifyContent="center" alignItems="center" flexDirection="column" w="100%" mb="0px">
			<Flex w="100%" justify="space-between" align="center">
				<Text fontSize="xl" fontWeight="600" alignSelf="start" pb={2}>
					Allocated vs Claimed
				</Text>
				<SelectTimelineMenu
					selected={selectedTime}
					items={timeCategories}
					onItemSelected={setSelectedTime}
				/>
			</Flex>
			<Flex w="100%" flexDirection={{ base: 'column', lg: 'column' }}>
				<Box minH="360px" minW="75%" mt="auto">
					<LineChart
						chartData={[
							{ name: 'Allocated', data: unclaimedArray },
							{ name: 'Claimed', data: claimedArray },
						]}
						chartOptions={{
							...chartConfig,
							colors: ['#a79dcb', '#0857ef'],
							xaxis: {
								...chartConfig.xaxis,
								categories: datesArray,
								// overwriteCategories: ovewriteCategories(
								//   datesArray,
								//   selectedTime.label === '1W' ? 4 : 7,
								// ),
							},
							annotations: {
								xaxis: airdropsLabelsForChart,
							},
						}}
					/>
					<Flex justify="space-between" pl={5} pr={2}>
						{ovewriteCategories(datesArray, selectedTime.label === '1W' ? 4 : 7).map((date) => (
							<Text key={date} fontSize={12} color="secondaryGray.600">
								{date}
							</Text>
						))}
					</Flex>
				</Box>
			</Flex>
		</Card>
	)
}

export default ClaimedUnclaimedChart
