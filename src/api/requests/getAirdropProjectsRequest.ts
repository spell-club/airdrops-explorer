import { AxiosInstance } from 'axios'
import { AirdropProject } from '../types'

const getAirdropProjectsRequest = async (
  apiClient: AxiosInstance,
): Promise<AirdropProject[]> => {
  return new Promise((resolve, reject) => {
    apiClient
      .get('/airdrop/projects')
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default getAirdropProjectsRequest
