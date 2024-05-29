import { ReactNode } from 'react'
import NextTopLoader from 'nextjs-toploader'
import type { Metadata } from 'next'

import { globalStyles } from 'styles/theme/styles'

import Head from './head'

import AppWrappers from './AppWrappers'

export const metadata: Metadata = {
	title: 'Cosmos Airdrop Checker | Track and Claim Airdrops with SpellDrop',
	description: `Discover and track Cosmos airdrops in an easy way with SpellDrop's Airdrop Checker. Explore and claim your airdrops using our advanced tracking tools.`,
}

export default function RootLayout({ children }: { children: ReactNode }) {
	const loaderColor = globalStyles.colors.purple[100]

	return (
		<html lang="en">
			<Head />

			<body id="root" className="chakra-ui-dark" suppressHydrationWarning={true}>
				<NextTopLoader
					color={loaderColor}
					easing="ease"
					speed={200}
					shadow={`0 0 10px ${loaderColor},0 0 5px ${loaderColor}`}
					showSpinner
				/>

				<AppWrappers>{children}</AppWrappers>
			</body>
		</html>
	)
}
