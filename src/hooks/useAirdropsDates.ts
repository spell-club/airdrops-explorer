import useAirdrops from './useAirdrops';

const useAirdropsDates = () => {
	const { airdrops, isAirdropsLoading } = useAirdrops();

	const airdropsDates = airdrops?.map((airdrop) => ({
		date: new Date(airdrop.airdrop_timestamp).toLocaleDateString(),
		name: airdrop.name,
	}));

	const airdropsLabelsForChart = airdropsDates?.map(({ date, name }) => ({
		x: date,
		strokeDashArray: 0,
		borderColor: 'rgba(57,220,50,0.3)',
		borderWidth: 3,
		label: {
			borderColor: '#0af802',
			orientation: 'horizontal',
			offsetX: 25,
			style: {
				color: '#e3e3e3',
				fontSize: '14px',
				background: '#150c0c',
			},
			text: name,
		},
	}));

	return { airdropsLabelsForChart };
};

export default useAirdropsDates;
