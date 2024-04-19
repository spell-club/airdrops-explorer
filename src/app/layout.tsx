import { ReactNode } from 'react'
import AppWrappers from './AppWrappers'
import Head from './head'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'SpellDrop',
	description: 'Explore Cosmos Airdrops',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<Head />

			<body id="root" className="chakra-ui-dark" suppressHydrationWarning={true}>
				<AppWrappers>{children} </AppWrappers>
			</body>
		</html>
	)
}
