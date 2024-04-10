import useClientApi from './useClientApi'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AirdropProject } from '../api/types'

const useAirdrops = (
	options?: UseQueryOptions<AirdropProject[], unknown, AirdropProject[], string[]>,
) => {
	const { clientApi } = useClientApi()

	const { data: airdrops, isLoading: isAirdropsLoading } = useQuery({
		queryKey: ['airdrops'],
		queryFn: () => clientApi.getAirdropProjects(),
		...options,
	})

	return { airdrops, isAirdropsLoading }
}

export default useAirdrops
