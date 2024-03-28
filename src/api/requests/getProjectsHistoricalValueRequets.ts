import { AxiosInstance } from 'axios'
import { HistoricalValue } from '../types'

const getProjectsHistoricalValueRequest = async (
  apiClient: AxiosInstance,
): Promise<HistoricalValue[]> => {
  return new Promise((resolve, reject) => {
    apiClient
      .get('/airdrop/projects/historical_value')
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default getProjectsHistoricalValueRequest
