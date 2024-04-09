import { AddressAsset } from '../types';
import { AxiosInstance } from 'axios';

const getAddressAssetsRequest = async (
	address: string,
	apiClient: AxiosInstance,
): Promise<AddressAsset[]> => {
	return new Promise((resolve, reject) => {
		apiClient
			.get(`/airdrop/address/${address}/assets`)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export default getAddressAssetsRequest;
