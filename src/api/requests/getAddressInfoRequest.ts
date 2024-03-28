import { AddressInfo } from '../types'
import { AxiosInstance } from 'axios'

const getAddressInfoRequest = async (
  address: string,
  apiClient: AxiosInstance,
): Promise<AddressInfo> => {
  return new Promise((resolve, reject) => {
    apiClient
      .get(`/airdrop/address/${address}`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default getAddressInfoRequest
