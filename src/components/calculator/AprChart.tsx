import React, { useMemo, useState } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import SelectTimelineMenu from 'components/UI/menu/SelectTimelineMenu'
import useDefaultChartConfig from 'hooks/useDefaultChartConfig'
import Card from 'components/card/Card'
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	ReferenceLine,
	Label,
	LabelProps,
} from 'recharts'
import CustomTooltip from '../CustomTooltip'

interface Props {
	dates: string[]
	values: number[]
}

const CustomLabel = (props: LabelProps, content: string) => {
	const x = 'width' in props.viewBox ? props.viewBox.width / 2 : 0
	const y = 'y' in props.viewBox ? props.viewBox.y - 30 : 0
	return (
		<g>
			<rect x={x} y={y} />
			<text x={x} y={y} fill="#fff" dy={20} dx={5} fontSize={14}>
				{content}
			</text>
		</g>
	)
}

const AprChart = ({ dates, values }: Props) => {
	const { timeCategories } = useDefaultChartConfig()
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

	const newData = dataByTime.map((data, idx) => {
		return {
			date: datesByTime[idx],
			APR: data,
		}
	})

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
					<ResponsiveContainer minWidth="100%" minHeight={400}>
						<LineChart
							data={newData}
							margin={{
								top: 10,
								right: 0,
								left: -30,
							}}
						>
							<CartesianGrid vertical={false} opacity={0.4} />
							<XAxis
								dataKey="date"
								tick={{ fill: '#A3AED0' }}
								style={{ fontSize: 12 }}
								tickLine={false}
								minTickGap={7}
							/>
							<YAxis
								tickCount={8}
								tick={{ fill: '#A3AED0' }}
								tickFormatter={(value) => `${value}%`}
								style={{ fontSize: 12 }}
							/>
							<Tooltip
								content={
									<CustomTooltip
										customValueFormatter={(value: string | number) =>
											`${Number(value).toFixed(2)}%`
										}
									/>
								}
							/>
							<ReferenceLine y={averageApr} stroke="green" strokeWidth={2} strokeDasharray="3 3">
								<Label
									position="center"
									content={(props) =>
										CustomLabel(props, `Average APR: ${Number(averageApr.toFixed(1))}%`)
									}
								></Label>
							</ReferenceLine>
							<Line type="monotone" dataKey="APR" stroke="#0857ef" strokeWidth={3} dot={false} />
						</LineChart>
					</ResponsiveContainer>
				</Flex>
			</Box>
		</Card>
	)
}

export default AprChart
