import React, { useMemo, useState } from 'react'
import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import SelectTimelineMenu from 'components/UI/menu/SelectTimelineMenu'
import useDefaultChartConfig from '../../hooks/useDefaultChartConfig'
import LineChart from 'components/UI/charts/LineChart'
import Card from 'components/card/Card'

interface Props {
	dates: string[]
	values: number[]
}

const AprChart = ({ dates, values }: Props) => {
	const { chartConfig, ovewriteCategories, timeCategories, xAxisCount } = useDefaultChartConfig()
	const [selectedTime, setSelectedTime] = useState(timeCategories[0])

	const dataByTime = useMemo(() => {
		if (!values) return []

		return values.slice(-selectedTime.value)
	}, [values, selectedTime])

	const datesByTime = useMemo(() => {
		if (!dates) return []

		return dates.slice(-selectedTime.value)
	}, [dates, selectedTime])

	const averageApr = useMemo(() => {
		if (!values) return 0

		return values.reduce((acc, value) => acc + value, 0) / values.length
	}, [values])

	return (
		<Card w="100%" alignItems="center" key="apr">
			<Box justifyContent="center" alignItems="center" flexDirection="column" w="100%" mb="0px">
				<Flex w="100%" justify="space-between" align="center">
					<Text fontSize="xl" fontWeight="600" alignSelf="start" pb={2}>
						Staking APR (ATOM)
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
							chartData={[{ name: 'APR', data: dataByTime }]}
							chartOptions={{
								...chartConfig,
								colors: ['#0857ef'],
								xaxis: {
									...chartConfig.xaxis,
									categories: dates,
								},
								annotations: {
									yaxis: [
										{
											y: averageApr,
											strokeDashArray: 2,
											borderColor: 'rgba(57,220,50,0.3)',
											borderWidth: 2,
											label: {
												position: 'left',
												borderColor: '#0af802',
												orientation: 'horizontal',
												offsetX: 130,
												style: {
													color: '#e3e3e3',
													fontSize: '14px',
													background: '#150c0c',
												},
												text: `Average APR: ${Number(averageApr.toFixed(1))}%`,
											},
										},
									],
								},
								tooltip: {
									...chartConfig.tooltip,
									y: {
										formatter: (value: number) => `${value.toFixed(2)}%`,
									},
								},
							}}
						/>
						<Flex justify="space-between" pl={5} pr={2}>
							{ovewriteCategories(
								datesByTime,
								selectedTime.label === '1W' ? 4 : xAxisCount - 1,
							).map((date) => (
								<Text key={date} fontSize={12} color="secondaryGray.600">
									{date}
								</Text>
							))}
						</Flex>
					</Box>
				</Flex>
			</Box>
		</Card>
	)
}

export default AprChart
