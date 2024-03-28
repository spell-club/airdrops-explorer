import { AxiosInstance } from 'axios'
import { HistoricalValue } from '../types'

const getProjectHistoricalValueRequest = async (
  projectId: number,
  apiClient: AxiosInstance,
): Promise<HistoricalValue[]> => {
  return new Promise((resolve, reject) => {
    apiClient
      .get(`/airdrop/project/${projectId}/historical_value`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default getProjectHistoricalValueRequest