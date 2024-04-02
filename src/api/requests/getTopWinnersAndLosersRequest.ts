import { AxiosInstance } from 'axios'
import {GetTopWinnersAndLosersResponse, TopParticipant} from '../types'

const getTopWinnersAndLosersRequest = async (
  apiClient: AxiosInstance,
): Promise<GetTopWinnersAndLosersResponse<TopParticipant>> => {
  return new Promise((resolve, reject) => {
    apiClient
      .get('/airdrop/projects/top_winners_losers')
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  })
}

export default getTopWinnersAndLosersRequest
