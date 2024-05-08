'use server'

import React from 'react'
import ClientPage from './clientPage'
import ClientApi from '../api'

const getServerDataForClient = async () => {
	const clientApi = new ClientApi()

	const stats = await clientApi.getStats()
	const history = await clientApi.getProjectsHistoricalValue()
	const drops = await clientApi.getAirdropProjects()
	const topWinnersAndLosers = await clientApi.getTopWinnersAndLosers()

	return {
		stats,
		history,
		drops,
		topWinnersAndLosers,
	}
}

const Page = async () => {
	const serverData = await getServerDataForClient()

	return (
		<ClientPage
			stats={serverData.stats}
			history={serverData.history}
			drops={serverData.drops}
			topWinnersAndLosers={serverData.topWinnersAndLosers}
		/>
	)
}

export default Page
