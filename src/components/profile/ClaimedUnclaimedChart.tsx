import React, { useMemo, useState } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import Card from '../card/Card'
import useClientApi from 'hooks/useClientApi'
import { roundToPrecision } from 'utils'
import useDefaultChartConfig from 'hooks/useDefaultChartConfig'
import SelectTimelineMenu from '../UI/menu/SelectTimelineMenu'
import useAirdropsDates from 'hooks/useAirdropsDates'
import {
	CartesianGrid,
	Label,
	Legend,
	Line,
	ReferenceLine,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
	LineChart,
} from 'recharts'
import numbro from 'numbro'
import CustomTooltip from '../CustomTooltip'
import { globalStyles } from 'styles/theme/styles'

interface Props {
	address: string
}

const ClaimedUnclaimedChart = ({ address }: Props) => {
	const { clientApi } = useClientApi()
	const { timeCategories, defaultYAxisLabelFormat, defaultTooltipFormat } = useDefaultChartConfig()
	const { data: chartData } = useQuery({
		queryKey: ['claimHistory'],
		queryFn: () => clientApi.getClaimHistoricalValue(address),
	})

	const secondaryGray = globalStyles.colors.secondaryGray[600]

	const [selectedTime, setSelectedTime] = useState(timeCategories[0])
	const { airdropsLabelsForChart } = useAirdropsDates()

	const dataByTime = useMemo(() => {
		if (!chartData) return []

		return chartData.slice(-selectedTime.value)
	}, [chartData, selectedTime])

	const datesArray = useMemo(
		() => dataByTime?.map((data) => new Date(data.date).toLocaleDateString()),
		[dataByTime],
	)

	const aggregatedChartData = useMemo(() => {
		return dataByTime.map((data, idx) => ({
			Allocated: roundToPrecision({ value: data.allocated_amount_usd, precision: 2 }),
			Claimed: roundToPrecision({ value: data.claimed_amount_usd, precision: 2 }),
			date: datesArray[idx],
		}))
	}, [dataByTime, datesArray])

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
				<ResponsiveContainer minWidth="100%" minHeight={400}>
					<LineChart
						data={aggregatedChartData}
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
						<Legend iconSize={10} />
						<Line type="monotone" dataKey="Claimed" stroke="#4690fd" strokeWidth={3} dot={false} />
						<Line
							type="monotone"
							dataKey="Allocated"
							stroke="#f035fd"
							strokeWidth={2}
							dot={false}
						/>

						{airdropsLabelsForChart?.map((label) => (
							<ReferenceLine
								key={label.x}
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
		</Card>
	)
}

export default ClaimedUnclaimedChart
