import { AxiosInstance } from 'axios';
import { GetTopWinnersAndLosersResponse, TopParticipant, TopParticipantByProject } from '../types';

const getAirdropTopClaimersAndLosersRequest = async (
	projectId: number | string,
	apiClient: AxiosInstance,
): Promise<GetTopWinnersAndLosersResponse<TopParticipantByProject>> => {
	return new Promise((resolve, reject) => {
		apiClient
			.get(`/airdrop/project/${projectId}/top_winners_losers`)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export default getAirdropTopClaimersAndLosersRequest;
