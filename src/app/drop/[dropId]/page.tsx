'use server'

import React from 'react'
import ClientPage from './clientPage'
import ClientApi from 'api'

interface PageParams {
	dropId: string
}

interface Props {
	params: PageParams
}

const getServerDataForClient = async (id: string) => {
	const clientApi = new ClientApi()

	const dropInfo = await clientApi.getAirdropProject(id)
	const chartData = await clientApi.getProjectHistoricalValue(id)
	const topWinnersAndLosers = await clientApi.getAirdropTowWinnersAndLosers(id)

	return {
		dropInfo,
		chartData,
		topWinnersAndLosers,
	}
}

const Page = async ({ params }: Props) => {
	const serverData = await getServerDataForClient(params.dropId)

	return (
		<ClientPage
			airdropProject={serverData.dropInfo}
			dropId={params.dropId}
			chartData={serverData.chartData}
			claimersData={serverData.topWinnersAndLosers}
		/>
	)
}

export default Page
