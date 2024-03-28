import { AxiosInstance } from 'axios'
import { GetTopWinnersAndLosersResponse } from '../types'

const getTopWinnersAndLosersRequest = async (
  apiClient: AxiosInstance,
): Promise<GetTopWinnersAndLosersResponse> => {
  return new Promise((resolve, reject) => {
    apiClient
      .get('/airdrop/top_winners_losers')
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  })
}

export default getTopWinnersAndLosersRequest
