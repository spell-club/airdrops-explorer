'use client'
import Image from 'next/image'
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer'
import { Flex, Heading, Link, OrderedList, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export default function BlockRendererClient({ content }: { readonly content: BlocksContent }) {
	if (!content) return null
	return (
		<BlocksRenderer
			content={content}
			blocks={{
				image: ({ image }) => {
					return (
						<Flex w="100%" justify="center">
							<Image
								src={image.url}
								width={image.width}
								height={image.height}
								alt={image.alternativeText || ''}
							/>
						</Flex>
					)
				},

				link: ({ url, children }) => {
					return (
						<Link href={url} color="navy.400" isExternal>
							{children}
						</Link>
					)
				},

				heading: ({ level, children }) => {
					return <Heading as={`h${level}`}>{children}</Heading>
				},
				list: (props) => {
					if (props.format === 'ordered') {
						return <OrderedList ml={10}>{props.children}</OrderedList>
					}

					return <UnorderedList ml={10}>{props.children}</UnorderedList>
				},
				'list-item': (props) => <li>{props.children}</li>,
			}}
		/>
	)
}
