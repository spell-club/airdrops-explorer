import { AxiosInstance } from 'axios'
import { TopParticipant } from '../types'

const getAirdropClaimersRequest = async (
  projectId: number | string,
  apiClient: AxiosInstance,
): Promise<TopParticipant[]> => {
  return new Promise((resolve, reject) => {
    apiClient
      .get(`/airdrop/project/${projectId}/claimers`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default getAirdropClaimersRequest
