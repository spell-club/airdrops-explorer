import React, { useEffect, useMemo, useState } from 'react'
import { Flex, useColorModeValue, Text, Skeleton } from '@chakra-ui/react'
import { roundToPrecision } from 'utils'
import Card from '../card/Card'
import useDefaultChartConfig from 'hooks/useDefaultChartConfig'
import SelectTimelineMenu from 'components/UI/menu/SelectTimelineMenu'
import useAirdropsDates from 'hooks/useAirdropsDates'
import { HistoricalValue } from 'api/types'
import {
	CartesianGrid,
	Label,
	Line,
	ReferenceLine,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
	LineChart,
	Legend,
} from 'recharts'
import numbro from 'numbro'
import CustomTooltip from 'components/CustomTooltip'
import { globalStyles } from 'styles/theme/styles'

interface Props {
	chartData: HistoricalValue[]
}

const ProjectsDynamicChart = ({ chartData }: Props) => {
	const { timeCategories, defaultYAxisLabelFormat, defaultTooltipFormat } = useDefaultChartConfig()
	const [selectedTime, setSelectedTime] = useState(timeCategories[0])
	const { airdropsLabelsForChart } = useAirdropsDates()
	const [showSkeleton, setShowSkeleton] = useState(true)
	const secondaryGray = globalStyles.colors.secondaryGray[600]

	useEffect(() => {
		if (chartData) {
			setTimeout(() => {
				setShowSkeleton(false)
			}, 1600)
		}
	}, [chartData])

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
			Claimed: roundToPrecision({ value: data.claimed_amount_usd, precision: 2 }),
			Allocated: roundToPrecision({ value: data.allocated_amount_usd, precision: 2 }),
		}))
	}, [dataByTime, datesArray])

	const textColor = useColorModeValue('secondaryGray.900', 'white')

	return (
		<Card
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			w="100%"
			mb="0px"
			pos="relative"
			minH={460}
		>
			{showSkeleton && (
				<Skeleton
					w="100%"
					h="100%"
					pos="absolute"
					top={0}
					left={0}
					borderRadius="inherit"
					zIndex={100}
					opacity={1}
					endColor="navy.900"
					startColor="navy.800"
				/>
			)}
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
							strokeWidth={3}
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

export default ProjectsDynamicChart
