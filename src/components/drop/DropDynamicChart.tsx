import React, { useMemo, useState } from 'react';
import Card from '../card/Card';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import LineChart from '../charts/LineChart';
import { useQuery } from '@tanstack/react-query';
import useClientApi from '../../hooks/useClientApi';
import { roundToPrecision } from '../../utils';
import SelectTimelineMenu from '../SelectTimelineMenu';
import useDefaultChartConfig from '../../hooks/useDefaultChartConfig';
import numbro from 'numbro';

interface Props {
	dropId: string;
	tokenSymbol: string;
}

const defaultTooltipFormat = {
	trimMantissa: true,
	thousandSeparated: true,
};

const DropDynamicChart = ({ dropId, tokenSymbol }: Props) => {
	const { chartConfig, ovewriteCategories, timeCategories } = useDefaultChartConfig();
	const { clientApi } = useClientApi();
	const { data: chartData, isLoading: isChartDataLoading } = useQuery({
		queryKey: ['dropHistory'],
		queryFn: () => clientApi.getProjectHistoricalValue(dropId),
	});
	const [selectedTime, setSelectedTime] = useState(timeCategories[0]);

	const dataByTime = useMemo(() => {
		if (!chartData) return [];

		return chartData.slice(-selectedTime.value);
	}, [chartData, selectedTime]);

	const { claimedArray, allocatedArray } = useMemo(() => {
		const claimedArray: number[] = [];
		const allocatedArray: number[] = [];

		dataByTime.forEach((data) => {
			claimedArray.push(roundToPrecision({ value: data.claimed_amount_usd, precision: 2 }));
			allocatedArray.push(roundToPrecision({ value: data.allocated_amount_usd, precision: 2 }));
		});

		return { claimedArray, allocatedArray };
	}, [dataByTime]);

	const datesArray = dataByTime?.map((data) => new Date(data.date).toLocaleDateString());

	const textColor = useColorModeValue('secondaryGray.900', 'white');

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
				<Box minH="360px" minW="100%" mt="auto">
					<LineChart
						chartData={[
							{ name: 'Allocated', data: allocatedArray },
							{ name: 'Claimed', data: claimedArray },
						]}
						chartOptions={{
							...chartConfig,
							colors: ['#4318FF', '#39B8FF'],
							xaxis: {
								...chartConfig.xaxis,
								labels: {
									...chartConfig.xaxis.labels,
									style: {
										...chartConfig.xaxis.labels.style,
										fontSize: '12px',
									},
								},
								categories: datesArray,
								overwriteCategories: ovewriteCategories(
									datesArray,
									selectedTime.label === '1W' ? 4 : 7,
								),
							},
							tooltip: {
								...chartConfig.tooltip,
								y: {
									...chartConfig.tooltip.y,
									formatter(val: number, { seriesIndex, dataPointIndex }: any): string {
										const truncatedValue = roundToPrecision({
											value: val,
											precision: 0,
											method: 'floor',
										});
										const tokenAmount = seriesIndex
											? chartData[dataPointIndex].claimed_amount
											: chartData[dataPointIndex].allocated_amount;

										console.log(tokenAmount, 'tokenAmount', chartData[dataPointIndex]);

										const trancatedTokenAmount = roundToPrecision({
											value: tokenAmount,
											precision: 0,
											method: 'floor',
										});
										return `$${numbro(truncatedValue).format(defaultTooltipFormat)} | ${numbro(trancatedTokenAmount).format(defaultTooltipFormat)} ${tokenSymbol}`;
									},
								},
							},
						}}
					/>
				</Box>
			</Flex>
		</Card>
	);
};

export default DropDynamicChart;
