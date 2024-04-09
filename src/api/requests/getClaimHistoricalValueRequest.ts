import { AxiosInstance } from 'axios';
import { ClaimHistoricalValue } from '../types';

const getClaimHistoricalValueRequest = async (
	address: string,
	apiClient: AxiosInstance,
): Promise<ClaimHistoricalValue[]> => {
	return new Promise((resolve, reject) => {
		apiClient
			.get(`/airdrop/address/${address}/historical_value`)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export default getClaimHistoricalValueRequest;
