import axios, { AxiosInstance } from 'axios'
import {
  AddressAsset,
  AddressInfo,
  ClientApiInterface,
  HistoricalValue,
  TopParticipant,
} from './types'
import getTopWinnersAndLosersRequest from './requests/getTopWinnersAndLosersRequest'
import getAirdropProjectsRequest from './requests/getAirdropProjectsRequest'
import getProjectsHistoricalValueRequest from './requests/getProjectsHistoricalValueRequets'
import getAirdropProjectRequest from './requests/getAirdropProjectRequest'
import getAirdropClaimersRequest from './requests/getAirdropClaimersRequest'
import getProjectHistoricalValueRequest from './requests/getProjectHistoricalValueRequest'
import getAddressInfoRequest from './requests/getAddressInfoRequest'
import getClaimHistoricalValueRequest from './requests/getClaimHistoricalValueRequest'
import getAddressAssetsRequest from './requests/getAddressAssetsRequest'

const API_BASE_URL = 'https://api.spell.club/'

class ClientApi implements ClientApiInterface {
  readonly apiClient: AxiosInstance

  constructor() {
    this.apiClient = axios.create({
      baseURL: API_BASE_URL,
      timeout: 30000,
    })
  }

  getTopWinnersAndLosers() {
    return getTopWinnersAndLosersRequest(this.apiClient)
  }

  getAirdropProjects() {
    return getAirdropProjectsRequest(this.apiClient)
  }

  getProjectsHistoricalValue() {
    return getProjectsHistoricalValueRequest(this.apiClient)
  }

  getAirdropProject(id: number | string) {
    return getAirdropProjectRequest(id, this.apiClient)
  }

  getAirdropClaimers(id: number | string) {
    return getAirdropClaimersRequest(id, this.apiClient)
  }

  getProjectHistoricalValue(id: number | string) {
    return getProjectHistoricalValueRequest(id, this.apiClient)
  }

  getAddressInfo(address: string) {
    return getAddressInfoRequest(address, this.apiClient)
  }

  getClaimHistoricalValue(address: string) {
    return getClaimHistoricalValueRequest(address, this.apiClient)
  }

  getAddressAssets(address: string) {
    return getAddressAssetsRequest(address, this.apiClient)
  }
}

export default ClientApi
