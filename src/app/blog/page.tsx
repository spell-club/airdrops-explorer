'use server'

import React from 'react'
import ClientPage from './clientPage'
import ClientApi from 'api'
import { getBlogPosts } from 'api/blogApi/blogApi'

const getServerDataForClient = async () => {
	const clientApi = new ClientApi()
	const blogPosts = await getBlogPosts()

	const topWinnersAndLosers = await clientApi.getTopWinnersAndLosers()

	return {
		topWinnersAndLosers,
		blogPosts,
	}
}

const Page = async () => {
	const serverData = await getServerDataForClient()

	return (
		<ClientPage
			topWinnersAndLosers={serverData.topWinnersAndLosers}
			blogPosts={serverData.blogPosts}
		/>
	)
}

export default Page
