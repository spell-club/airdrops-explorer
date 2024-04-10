import axios, { AxiosInstance } from 'axios'
import {
	AddressAirdrop,
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
import getAirdropTopClaimersAndLosersRequest from './requests/getAirdropTopClaimersAndLosersRequest'
import getProjectHistoricalValueRequest from './requests/getProjectHistoricalValueRequest'
import getAddressInfoRequest from './requests/getAddressInfoRequest'
import getClaimHistoricalValueRequest from './requests/getClaimHistoricalValueRequest'
import getAddressAssetsRequest from './requests/getAddressAssetsRequest'
import getStatsRequest from './requests/getStatsRequest'
import getAddressAirdropsRequest from './requests/getAddressAirdropsRequest'

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

	getAirdropProject(id: string) {
		return getAirdropProjectRequest(id, this.apiClient)
	}

	getAirdropTowWinnersAndLosers(id: string) {
		return getAirdropTopClaimersAndLosersRequest(id, this.apiClient)
	}

	getProjectHistoricalValue(id: string) {
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

	getStats() {
		return getStatsRequest(this.apiClient)
	}

	getAddressAirdrops(address: string) {
		return getAddressAirdropsRequest(address, this.apiClient)
	}
}

export default ClientApi
