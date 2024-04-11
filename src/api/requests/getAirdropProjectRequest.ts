import { AxiosInstance } from 'axios'
import { AirdropProject } from '../types'

const getAirdropProjectRequest = async (
	projectId: number | string,
	apiClient: AxiosInstance,
): Promise<AirdropProject> => {
	return new Promise((resolve, reject) => {
		apiClient
			.get(`/airdrop/projec/${projectId}`)
			.then((response) => {
				resolve(response.data)
			})
			.catch((error) => {
				reject(error)
			})
	})
}

export default getAirdropProjectRequest
