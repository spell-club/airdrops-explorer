import { AxiosInstance } from 'axios'
import { ClaimHistoricalValue } from '../types'

const getClaimHistoricalValueRequest = async (
  address: string,
  apiClient: AxiosInstance,
): Promise<ClaimHistoricalValue[]> => {
  return new Promise((resolve, reject) => {
    apiClient
      .get(`/airdrop/address/${address}/claimed_unclaimed`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default getClaimHistoricalValueRequest
