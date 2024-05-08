const defaultTooltipFormat = {
	trimMantissa: true,
	thousandSeparated: true,
}

const defaultYAxisLabelFormat = {
	trimMantissa: true,
	mantissa: 2,
	average: true,
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
	return {
		defaultTooltipFormat,
		timeCategories,
		defaultYAxisLabelFormat,
	}
}

export default useDefaultChartConfig
