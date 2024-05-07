import { Box, Flex, Text } from '@chakra-ui/react'
import SelectTimelineMenu from 'components/UI/menu/SelectTimelineMenu'
import React, { useMemo, useState } from 'react'
import useDefaultChartConfig from 'hooks/useDefaultChartConfig'
import Card from '../card/Card'
import useAirdropsDates from 'hooks/useAirdropsDates'
import {
	CartesianGrid,
	Label,
	Line,
	LineChart,
	ReferenceLine,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'
import numbro from 'numbro'
import CustomTooltip from '../CustomTooltip'
import { roundToPrecision } from 'utils'
import { globalStyles } from 'styles/theme/styles'

interface Props {
	values: number[]
	dates: string[]
}

const RewardsChart = ({ values, dates }: Props) => {
	const { timeCategories, defaultYAxisLabelFormat, defaultTooltipFormat } = useDefaultChartConfig()
	const { airdropsLabelsForChart } = useAirdropsDates()
	const [selectedTime, setSelectedTime] = useState(timeCategories[0])
	const secondaryGray = globalStyles.colors.secondaryGray[600]

	const rewardsByTime = useMemo(() => {
		if (!values) return []

		return values.slice(-selectedTime.value)
	}, [values, selectedTime])

	const datesByTime = useMemo(() => {
		if (!dates) return []

		return dates.slice(-selectedTime.value)
	}, [dates, selectedTime])

	const aggregatedChartData = rewardsByTime.map((data, idx) => {
		return {
			date: datesByTime[idx],
			Rewards: data,
		}
	})

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
					<ResponsiveContainer minWidth="100%" minHeight={400}>
						<LineChart
							data={aggregatedChartData}
							margin={{
								top: 10,
								right: 0,
								left: -20,
							}}
						>
							<CartesianGrid vertical={false} opacity={0.4} />
							<XAxis
								dataKey="date"
								tick={{ fill: secondaryGray }}
								style={{ fontSize: 12 }}
								tickLine={false}
								minTickGap={7}
							/>
							<YAxis
								tickCount={8}
								tick={{ fill: secondaryGray }}
								tickFormatter={(value) =>
									numbro(value).format(defaultYAxisLabelFormat).toUpperCase()
								}
								style={{ fontSize: 12 }}
							/>
							<Tooltip
								content={
									<CustomTooltip
										customValueFormatter={(val: number | string) => {
											const truncatedValue = roundToPrecision({
												value: Number(val),
												precision: 0,
												method: 'floor',
											})
											return `$${numbro(truncatedValue).format(defaultTooltipFormat)}`
										}}
									/>
								}
							/>
							<Line
								type="monotone"
								dataKey="Rewards"
								stroke="#f035fd"
								strokeWidth={3}
								dot={false}
							/>
							{airdropsLabelsForChart.map((label) => (
								<ReferenceLine
									x={label.x}
									stroke={label.borderColor}
									strokeWidth={label.borderWidth}
									strokeDasharray={label.strokeDashArray}
								>
									<Label
										position={label.label.offsetY ? 'insideTop' : 'center'}
										style={{ fill: '#fff', fontSize: 14, fontWeight: 600 }}
									>
										{label.label.text}
									</Label>
								</ReferenceLine>
							))}
						</LineChart>
					</ResponsiveContainer>
				</Flex>
			</Box>
		</Card>
	)
}

export default RewardsChart
