import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
	title: 'SpellDrop Blog: First Hub of Cosmos Airdrops Guides',
	description:
		'Explore the SpellDrop Blog, your first resource for expert guides on Cosmos airdrops. Dive into detailed articles and insights.',
}

export default function BlogLayout({ children }: { children: ReactNode }) {
	return <>{children}</>
}
