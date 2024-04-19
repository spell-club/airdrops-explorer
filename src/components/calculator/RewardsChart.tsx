import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import SelectTimelineMenu from 'components/UI/menu/SelectTimelineMenu'
import LineChart from 'components/UI/charts/LineChart'
import React, { useMemo, useState } from 'react'
import useDefaultChartConfig from 'hooks/useDefaultChartConfig'
import Card from '../card/Card'
import useAirdropsDates from 'hooks/useAirdropsDates'

interface Props {
	values: number[]
	dates: string[]
}

const RewardsChart = ({ values, dates }: Props) => {
	const { chartConfig, ovewriteCategories, timeCategories, xAxisCount } = useDefaultChartConfig()
	const { airdropsLabelsForChart } = useAirdropsDates()

	const [selectedTime, setSelectedTime] = useState(timeCategories[0])

	const rewardsByTime = useMemo(() => {
		if (!values) return []

		return values.slice(-selectedTime.value)
	}, [values, selectedTime])

	const datesByTime = useMemo(() => {
		if (!dates) return []

		return dates.slice(-selectedTime.value)
	}, [dates, selectedTime])

	return (
		<Card w="100%" alignItems="center">
			<Box justifyContent="center" alignItems="center" flexDirection="column" w="100%" mb="0px">
				<Flex w="100%" justify="space-between" align="center" gap={1}>
					<Text fontSize="xl" fontWeight="600" alignSelf="start" pb={2}>
						Total gains: Staking & Airdrops (USD)
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
							chartData={[{ name: 'Rewards', data: rewardsByTime }]}
							chartOptions={{
								...chartConfig,
								colors: ['#f035fd'],
								xaxis: {
									...chartConfig.xaxis,
									categories: dates,
								},
								annotations: {
									xaxis: airdropsLabelsForChart,
								},
							}}
						/>
						<Flex justify="space-between" pl={5} pr={2}>
							{ovewriteCategories(datesByTime, selectedTime.label === '1W' ? 4 : xAxisCount).map(
								(date) => (
									<Text key={date} fontSize={12} color="secondaryGray.600">
										{date}
									</Text>
								),
							)}
						</Flex>
					</Box>
				</Flex>
			</Box>
		</Card>
	)
}

export default RewardsChart
