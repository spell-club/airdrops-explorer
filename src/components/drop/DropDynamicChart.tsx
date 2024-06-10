import React, { useMemo, useState } from 'react'
import Card from '../card/Card'
import { Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { roundToPrecision } from 'utils'
import SelectTimelineMenu from '../UI/menu/SelectTimelineMenu'
import useDefaultChartConfig from 'hooks/useDefaultChartConfig'
import numbro from 'numbro'
import { HistoricalValue } from 'api/types'
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'
import CustomTooltip from '../CustomTooltip'
import { globalStyles } from 'styles/theme/styles'

interface Props {
	tokenSymbol: string
	chartData: HistoricalValue[]
}

const DropDynamicChart = ({ tokenSymbol, chartData }: Props) => {
	const { defaultTooltipFormat, timeCategories, defaultYAxisLabelFormat } = useDefaultChartConfig()
	const [selectedTime, setSelectedTime] = useState(timeCategories[0])
	const secondaryGray = globalStyles.colors.secondaryGray[600]

	const dataByTime = useMemo(() => {
		if (!chartData) return []

		return chartData.slice(-selectedTime.value)
	}, [chartData, selectedTime])

	const datesArray = useMemo(
		() => dataByTime?.map((data) => new Date(data.date).toLocaleDateString()),
		[dataByTime],
	)

	const aggregatedData = useMemo(() => {
		return dataByTime.map((data, idx) => ({
			date: datesArray[idx],
			Allocated: roundToPrecision({ value: data.allocated_amount_usd, precision: 2 }),
			Claimed: roundToPrecision({ value: data.claimed_amount_usd, precision: 2 }),
			allocatedTokens: roundToPrecision({ value: data.allocated_amount, precision: 0 }),
			claimedTokens: roundToPrecision({ value: data.claimed_amount, precision: 0 }),
		}))
	}, [dataByTime, datesArray])

	const textColor = useColorModeValue('secondaryGray.900', 'white')

	return (
		<Card justifyContent="center" alignItems="center" flexDirection="column" w="100%" mb="0px">
			<Flex w="100%" justify="space-between" align="center">
				<Text color={textColor} fontSize="xl" fontWeight="600" alignSelf="start" pb={2}>
					Allocated vs Claimed
				</Text>
				<SelectTimelineMenu
					selected={selectedTime}
					items={timeCategories}
					onItemSelected={setSelectedTime}
				/>
			</Flex>

			<Flex w="100%" flexDirection={{ base: 'column', lg: 'row' }}>
				<ResponsiveContainer minWidth="100%" minHeight={400}>
					<LineChart
						data={aggregatedData}
						margin={{
							top: 10,
							right: 0,
							left: -20,
							bottom: -10,
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
							tickCount={10}
							tick={{ fill: secondaryGray }}
							tickFormatter={(value) => numbro(value).format(defaultYAxisLabelFormat).toUpperCase()}
							style={{ fontSize: 12 }}
						/>
						<Tooltip
							content={
								<CustomTooltip
									customValueFormatter={(val: number | string, dataKey: string, payload: any) => {
										let tokensValue = 0
										if (dataKey === 'Allocated') {
											tokensValue = payload?.allocatedTokens
										} else {
											tokensValue = payload?.claimedTokens
										}
										const trancatedTokenAmount = roundToPrecision({
											value: tokensValue,
											precision: 0,
											method: 'floor',
										})

										const truncatedValue = roundToPrecision({
											value: Number(val),
											precision: 0,
											method: 'floor',
										})
										return `$${numbro(truncatedValue).format(defaultTooltipFormat)} | ${numbro(trancatedTokenAmount).format(defaultTooltipFormat)} ${tokenSymbol}`
									}}
								/>
							}
						/>
						<Legend iconSize={10} />
						<Line type="monotone" dataKey="Claimed" stroke="#4690fd" strokeWidth={3} dot={false} />
						<Line
							type="monotone"
							dataKey="Allocated"
							stroke="#f035fd"
							strokeWidth={3}
							dot={false}
						/>
					</LineChart>
				</ResponsiveContainer>
			</Flex>
		</Card>
	)
}

export default DropDynamicChart
