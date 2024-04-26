'use client'
import React from 'react'
import { Badge, Box, Flex, Heading, Text } from '@chakra-ui/react'
import Card from 'components/card/Card'
import { useQuery } from '@tanstack/react-query'
import { BLOG_API_URL, getPostById } from 'api/blogApi/blogApi'
import BlockRendererClient from 'components/blog/BlockRendererClient'
import Link from 'next/link'
import { type BlocksContent } from '@strapi/blocks-react-renderer'
import Loader from 'components/UI/loader'

interface PageParams {
	postId: string
}

interface Props {
	params: PageParams
}

const Page = ({ params }: Props) => {
	const { postId } = params

	const { data: blogPost, isLoading: isBlogPostLoading } = useQuery({
		queryKey: ['blogPost', postId],
		queryFn: () => getPostById(Number(postId)),
	})

	if (isBlogPostLoading) {
		return <Loader mt={100} />
	}

	if (!blogPost && !isBlogPostLoading) {
		return <div>not found</div>
	}

	const { attributes } = blogPost.data

	return (
		<Flex flexDirection="column" gap="20px">
			<Flex>
				<Link href="/blog"> {'< Back to blog'} </Link>
			</Flex>
			<Flex flexDirection="column" gap="20px">
				<Box
					bgImage={BLOG_API_URL + attributes.image.data.attributes.url}
					bgSize="cover"
					bgPosition="center"
					bgRepeat="no-repeat"
					w="100%"
					borderRadius={20}
					h={250}
					pos="relative"
				></Box>
				<Flex w="100%" justify="center">
					<Flex gap={3} align="center" flexWrap="wrap" justify="center">
						{attributes.tags.split(' ').map((tag) => (
							<Badge key={tag}>{tag}</Badge>
						))}
					</Flex>
				</Flex>

				<Card pe="20px" w="100%" pos="relative" py={{ base: '30px', md: '20px' }}>
					<Text pos="absolute" top={{ base: '10px', md: '20px' }} right="20px" color="gray.400">
						{new Date(attributes.createdAt).toLocaleDateString()}
					</Text>

					<Heading as="h1" fontWeight="bold" mb="40px" textAlign="center">
						{attributes.title}
					</Heading>

					<Flex w="100%" justify="center">
						<Box color="gray.100" maxW={{ base: '90%', md: '75%' }}>
							<BlockRendererClient content={attributes.content as unknown as BlocksContent} />
						</Box>
					</Flex>
				</Card>
			</Flex>
		</Flex>
	)
}

export default Page
