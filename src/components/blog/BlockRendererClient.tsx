'use client'
import Image from 'next/image'
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer'
import { Flex, Heading, Link, OrderedList, Text, UnorderedList } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

type HeadingProps = {
	level: 1 | 2 | 3 | 4 | 5 | 6
	children: ReactNode
}
const CustomHeading = ({ level, children }: HeadingProps) => {
	const fontSize = {
		1: 32,
		2: 24,
		3: 22,
		4: 20,
		5: 18,
		6: 16,
	}[level]

	return (
		<Heading as={`h${level}`} my="20px" fontSize={fontSize}>
			{children}
		</Heading>
	)
}

export default function BlockRendererClient({ content }: { readonly content: BlocksContent }) {
	if (!content) return null
	return (
		<BlocksRenderer
			content={content}
			blocks={{
				image: ({ image }) => {
					return (
						<Flex w="100%" justify="center" my="20px">
							<Image
								src={image.url}
								width={image.width}
								height={image.height}
								alt={image.alternativeText || ''}
							/>
						</Flex>
					)
				},

				paragraph: ({ children }) => (
					<Text mb="10px" fontSize={{ base: 16, md: 20 }}>
						{children}
					</Text>
				),

				link: ({ url, children }) => {
					return (
						<Link href={url} color="purple.200" isExternal>
							{children}
						</Link>
					)
				},

				heading: ({ level, children }) => {
					return <CustomHeading level={level}>{children}</CustomHeading>
				},
				list: (props) => {
					if (props.format === 'ordered') {
						return (
							<OrderedList ml={10} my="10px" fontSize={{ base: 16, md: 20 }}>
								{props.children}
							</OrderedList>
						)
					}

					return (
						<UnorderedList ml={10} my="10px" fontSize={{ base: 16, md: 20 }}>
							{props.children}
						</UnorderedList>
					)
				},
				'list-item': (props) => <li>{props.children}</li>,
			}}
		/>
	)
}
