import { roundToPrecision } from '../utils'
import numbro from 'numbro'
import { ApexOptions } from 'apexcharts'
import { useBreakpointValue } from '@chakra-ui/react'

const defaultTooltipFormat = {
	trimMantissa: true,
	thousandSeparated: true,
}

const defaultYAxisLabelFormat = {
	trimMantissa: true,
	mantissa: 2,
	average: true,
}

const DEFAULT_CHART_CONFIG: ApexOptions = {
	chart: {
		animations: {
			enabled: false,
		},
		offsetX: 0,
		toolbar: {
			show: false,
		},
		selection: {
			enabled: false,
		},
		zoom: {
			enabled: false,
		},

		dropShadow: {
			enabled: true,
			top: 13,
			left: 0,
			blur: 10,
			opacity: 0.1,
			color: '#2e399f',
		},
	},
	colors: ['#39B8FF'],
	tooltip: {
		theme: 'dark',
		y: {
			formatter(val: number): string {
				const truncatedValue = roundToPrecision({
					value: val,
					precision: 0,
					method: 'floor',
				})
				return `$${numbro(truncatedValue).format(defaultTooltipFormat)}`
			},
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: 'straight',
		width: 3,
	},
	xaxis: {
		labels: {
			rotate: 0,
			hideOverlappingLabels: true,
			style: {
				colors: '#A3AED0',
				fontSize: '0px',
				fontWeight: '500',
			},
		},
		axisBorder: {
			show: false,
		},
		axisTicks: {
			show: false,
		},
	},
	yaxis: {
		show: true,
		showAlways: false,
		logBase: 10,
		forceNiceScale: false,
		labels: {
			show: true,
			align: 'right',
			minWidth: 0,
			maxWidth: 160,
			style: {
				colors: '#A3AED0',
				fontSize: '12px',
				fontWeight: 400,
			},
			offsetX: 0,
			offsetY: 0,
			rotate: 0,
			formatter: (value) => {
				return numbro(value).format(defaultYAxisLabelFormat).toUpperCase()
			},
		},
		axisBorder: {
			show: true,
			color: '#78909C',
			offsetX: 0,
			offsetY: 0,
		},
		axisTicks: {
			show: true,
			color: '#78909C',
			width: 6,
			offsetX: 0,
			offsetY: 0,
		},
	},
	legend: {
		show: true,
		position: 'top',
		labels: {
			colors: '#fff',
		},
	},
	grid: {
		show: true,
		borderColor: 'rgba(255, 255, 255, 0.3)',
	},
}

const timeCategories = [
	{
		label: 'All time',
		value: 999999,
	},
	{
		label: '6M',
		value: 180,
	},
	{
		label: '3M',
		value: 90,
	},
	{
		label: '1M',
		value: 30,
	},

	{
		label: '1W',
		value: 7,
	},
]

const useDefaultChartConfig = () => {
	const ovewriteCategories = (categories: string[], count = 10) => {
		return categories?.filter((value, index, array) => {
			const length = array?.length
			const step = Math.floor(length / count)

			return index === 0 || index % step === 0 || index === length - 1
		})
	}

	const xAxisCount = useBreakpointValue(
		{
			base: 3,
			md: 6,
			'2xl': 7,
		},
		{
			fallback: '7',
		},
	)

	return {
		chartConfig: DEFAULT_CHART_CONFIG,
		ovewriteCategories,
		timeCategories,
		xAxisCount,
	}
}

export default useDefaultChartConfig
