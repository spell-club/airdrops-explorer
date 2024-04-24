import { ReactNode } from 'react'
import NextTopLoader from 'nextjs-toploader'
import type { Metadata } from 'next'

import Head from './head'

import AppWrappers from './AppWrappers'

export const metadata: Metadata = {
	title: 'SpellDrop',
	description: 'Explore Cosmos Airdrops',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<Head />

			<body id="root" className="chakra-ui-dark" suppressHydrationWarning={true}>
				<NextTopLoader
					color="#A278E1"
					easing="ease"
					speed={200}
					shadow="0 0 10px #A278E1,0 0 5px #A278E1"
					showSpinner
				/>

				<AppWrappers>{children}</AppWrappers>
			</body>
		</html>
	)
}
