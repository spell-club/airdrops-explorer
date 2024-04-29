import { ReactNode } from 'react'
import { Metadata } from 'next'
import { getPostById } from 'api/blogApi/blogApi'

interface Props {
	params: { postId: string }
	children: ReactNode
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	// read route params
	const id = params.postId

	// fetch data
	const product = await getPostById(Number(id))

	const seoAttributes = product.data.attributes.SEO[0]

	return {
		title: seoAttributes.metaTitle,
		description: seoAttributes.metaDescription,
	}
}

export default function Layout({ children }: Props) {
	return children
}
