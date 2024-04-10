import { AxiosInstance } from 'axios'

interface ParticipantProject {
	project: string
}

interface TopParticipant {
	address: string
	projects: ParticipantProject[]
	total_amount_usd: number
}

interface TopParticipantByProject extends TopParticipant {
	total_amount: number
}

interface GetTopWinnersAndLosersResponse<T> {
	losers: T[]
	winners: T[]
}

interface AirdropProject {
	airdrop_amount: number
	average_airdrop_amount: number
	description: string
	id: number
	name: string
	snapshot_date: string
	airdrop_timestamp: string
	token_symbol: string
	total_allocated_usd: number
	total_claimed_usd: number
	total_allocated: number
	total_claimed: number
	eligible_users_num: number
	total_reallocated?: number
	total_reallocated_usd?: number
	claimers_num: number
}

interface HistoricalValue {
	date: string
	allocated_amount_usd: number
	claimed_amount_usd: number
	allocated_amount: number
	claimed_amount: number
}

interface AddressInfo {
	claimed_airdrops: number
	total_claimed_usd: number
	total_unclaimed_usd: number
	unclaimed_airdrops: number
}

interface ClaimHistoricalValue {
	claimed_amount_usd: number
	date: string
	allocated_amount_usd: number
}

interface AddressAsset {
	address: string
	chain_name: string
	token_name: string
	total_claimed: number
	total_claimed_usd: number
	total_unclaimed: number
	total_unclaimed_usd: number
}

interface AddressAirdrop {
	airdrop_timestamp: string
	address: string
	name: string
	token_name: string
	allocated_amount: number
	allocated_amount_usd: number
	claimed_amount: number
	claimed_amount_usd: number
}

interface Stats {
	total_allocated_usd: number
	total_claimed_usd: number
	eligible_users_num: number
}

interface ClientApiInterface {
	readonly apiClient: AxiosInstance

	getTopWinnersAndLosers(): Promise<GetTopWinnersAndLosersResponse<TopParticipant>>
	getAirdropProjects(): Promise<AirdropProject[]>
	getProjectsHistoricalValue(): Promise<HistoricalValue[]>
	getAirdropProject(id: string): Promise<AirdropProject>
	getAirdropTowWinnersAndLosers(
		id: string,
	): Promise<GetTopWinnersAndLosersResponse<TopParticipantByProject>>
	getProjectHistoricalValue(id: string): Promise<HistoricalValue[]>
	getAddressInfo(address: string): Promise<AddressInfo>
	getClaimHistoricalValue(address: string): Promise<ClaimHistoricalValue[]>
	getAddressAssets(address: string): Promise<AddressAsset[]>
	getStats(): Promise<Stats>
	getAddressAirdrops(address: string): Promise<AddressAirdrop[]>
}

export type {
	ClientApiInterface,
	GetTopWinnersAndLosersResponse,
	AirdropProject,
	HistoricalValue,
	TopParticipant,
	TopParticipantByProject,
	AddressInfo,
	ClaimHistoricalValue,
	AddressAsset,
	AddressAirdrop,
	Stats,
}
