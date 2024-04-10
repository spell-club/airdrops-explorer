import { AxiosInstance } from 'axios'
import { Stats } from '../types'

const getStatsRequest = async (apiClient: AxiosInstance): Promise<Stats> => {
	return new Promise((resolve, reject) => {
		apiClient
			.get('/airdrop/projects/stats')
			.then((response) => {
				resolve(response.data)
			})
			.catch((error) => {
				reject(error)
			})
	})
}

export default getStatsRequest
