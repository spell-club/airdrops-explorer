import { useEffect, useMemo, useState } from 'react'
import { Box, Flex, useColorModeValue, Text, Skeleton } from '@chakra-ui/react'
import { roundToPrecision } from 'utils'
import Card from '../card/Card'
import useDefaultChartConfig from 'hooks/useDefaultChartConfig'
import SelectTimelineMenu from 'components/UI/menu/SelectTimelineMenu'
import useAirdropsDates from 'hooks/useAirdropsDates'
import { HistoricalValue } from 'api/types'
import dynamic from 'next/dynamic'

const LineChart = dynamic(() => import('components/UI/charts/LineChart'), {
	ssr: false,
})

interface Props {
	chartData: HistoricalValue[]
}

const ProjectsDynamicChart = ({ chartData }: Props) => {
	const { chartConfig, ovewriteCategories, timeCategories, xAxisCount } = useDefaultChartConfig()
	const [selectedTime, setSelectedTime] = useState(timeCategories[0])
	const { airdropsLabelsForChart } = useAirdropsDates()
	const [showChart, setShowChart] = useState(false)
	const [showSkeleton, setShowSkeleton] = useState(true)

	useEffect(() => {
		if (chartData) {
			setTimeout(() => {
				setShowChart(true)
			}, 2000)
			setTimeout(() => {
				setShowSkeleton(false)
			}, 2600)
		}
	}, [chartData])

	const dataByTime = useMemo(() => {
		if (!chartData) return []

		return chartData.slice(-selectedTime.value)
	}, [chartData, selectedTime])

	const { claimedArray, allocatedArray } = useMemo(() => {
		const claimedArray: number[] = []
		const allocatedArray: number[] = []

		dataByTime.forEach((data) => {
			claimedArray.push(roundToPrecision({ value: data.claimed_amount_usd, precision: 2 }))
			allocatedArray.push(roundToPrecision({ value: data.allocated_amount_usd, precision: 2 }))
		})

		return { claimedArray, allocatedArray }
	}, [dataByTime])

	const datesArray = dataByTime?.map((data) => new Date(data.date).toLocaleDateString())
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
				<Box minH="360px" minW="100%" mt="auto">
					{showChart && (
						<LineChart
							chartData={[
								{ name: 'Allocated', data: allocatedArray },
								{ name: 'Claimed', data: claimedArray },
							]}
							chartOptions={{
								...chartConfig,
								colors: ['#4690fd', '#f035fd'],
								xaxis: {
									...chartConfig.xaxis,
									categories: datesArray,
								},
								annotations: {
									xaxis: airdropsLabelsForChart,
								},
							}}
						/>
					)}
					{showChart && (
						<Flex justify="space-between" pl={5} pr={2} gap={1}>
							{ovewriteCategories(datesArray, selectedTime.label === '1W' ? 4 : xAxisCount).map(
								(date) => (
									<Text key={date} fontSize={12} color="secondaryGray.600">
										{date}
									</Text>
								),
							)}
						</Flex>
					)}
				</Box>
			</Flex>
		</Card>
	)
}

export default ProjectsDynamicChart
