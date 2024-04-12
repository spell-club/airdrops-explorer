import { AddressAirdrop } from '../types'
import { AxiosInstance } from 'axios'

const getAddressAirdropsRequest = async (
	address: string,
	apiClient: AxiosInstance,
): Promise<AddressAirdrop[]> => {
	return new Promise((resolve, reject) => {
		apiClient
			.get(`/airdrop/address/${address}/drops`)
			.then((response) => {
				resolve(response.data)
			})
			.catch((error) => {
				reject(error)
			})
	})
}

export default getAddressAirdropsRequest
