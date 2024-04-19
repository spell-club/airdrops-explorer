import useAirdrops from './useAirdrops'

const useAirdropsDates = () => {
	const { airdrops, isAirdropsLoading } = useAirdrops({
		refetchOnWindowFocus: false,
		queryKey: ['airdrops'],
		enabled: false,
	})

	const airdropsDates = airdrops
		?.map((airdrop) => ({
			date: new Date(airdrop.airdrop_timestamp).toLocaleDateString(),
			name: airdrop.name,
		}))
		.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

	const airdropsLabelsForChart = airdropsDates?.map(({ date, name }, index) => ({
		x: date,
		strokeDashArray: 0,
		borderColor: 'rgba(57,220,50,0.3)',
		borderWidth: 3,
		label: {
			borderColor: '#0af802',
			orientation: 'horizontal',
			offsetX: 0,
			offsetY: index % 2 === 0 ? 0 : 100,
			style: {
				color: '#e3e3e3',
				fontSize: '14px',
				background: '#150c0c',
			},
			text: name,
		},
	}))

	return { airdropsLabelsForChart, airdropsDates }
}

export default useAirdropsDates
