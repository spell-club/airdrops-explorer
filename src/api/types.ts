import { AxiosInstance } from 'axios'

interface ParticipantProject {
  project: string
}

interface TopParticipant {
  address: string
  projects: ParticipantProject[]
  total_amount_usd: number
}

interface GetTopWinnersAndLosersResponse {
  losers: TopParticipant[]
  winners: TopParticipant[]
}

interface AirdropProject {
  airdrop_amount: number
  average_airdrop_amount: number
  description: string
  id: number
  name: string
  snapshot_date: string
  token_symbol: string
  total_allocated_usd: number
  total_claimed_usd: number
  users_num: number
}

interface HistoricalValue {
  date: string
  value_usd: number
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
  unclaimed_amount_usd: number
}

interface ClientApiInterface {
  readonly apiClient: AxiosInstance

  getTopWinnersAndLosers(): Promise<GetTopWinnersAndLosersResponse>
  getAirdropProjects(): Promise<AirdropProject[]>
  getProjectsHistoricalValue(): Promise<HistoricalValue[]>
  getAirdropProject(id: number): Promise<AirdropProject>
  getAirdropClaimers(id: number): Promise<TopParticipant[]>
  getProjectHistoricalValue(id: number): Promise<HistoricalValue[]>
  getAddressInfo(address: string): Promise<AddressInfo>
  getClaimHistoricalValue(address: string): Promise<ClaimHistoricalValue[]>
}

export type {
  ClientApiInterface,
  GetTopWinnersAndLosersResponse,
  AirdropProject,
  HistoricalValue,
  TopParticipant,
  AddressInfo,
  ClaimHistoricalValue,
}
