import { AxiosInstance } from 'axios'
import { CalculatorResponse } from '../types'

const calculateAirdropRequest = async (
	amount: number,
	apiClient: AxiosInstance,
): Promise<CalculatorResponse> => {
	return new Promise((resolve, reject) => {
		apiClient
			.get(`/airdrop/calculate`, {
				params: {
					value: amount,
				},
			})
			.then((response) => {
				resolve(response.data)
			})
			.catch((error) => {
				reject(error)
			})
	})
}

export default calculateAirdropRequest
