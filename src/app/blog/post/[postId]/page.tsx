'use client'
import React from 'react'
import { BLOG_POSTS } from 'constants/index'
import { Flex, Image, Text } from '@chakra-ui/react'

import Card from 'components/card/Card'
import { useQuery } from '@tanstack/react-query'
import { getPostById } from 'api/blogApi'

const Page = ({ params }: { params: { postId: string } }) => {
	const { postId } = params

	const { data: blogPost, isLoading: isBlogPostLoading } = useQuery({
		queryKey: ['blogPost', postId],
		queryFn: () => getPostById(Number(postId)),
	})

	console.log(blogPost)

	const currentConstantPost = BLOG_POSTS.find((post) => post.id === Number(postId))

	const currentPost = currentConstantPost

	if (!currentPost) {
		return <div>not found</div>
	}

	return (
		<Flex flexDirection="column" gap="20px">
			<Image src={currentPost.image} alt="banner" w="100%" h={250} borderRadius={20} />

			<Card pe="20px" w="100%" pos="relative">
				<Text pos="absolute" top="20px" right="20px" color="gray.400">
					{currentPost.date}
				</Text>

				<Text fontWeight="bold" fontSize="2xl" mb="10px">
					{currentPost.title}
				</Text>
				<Text whiteSpace="pre-wrap" color="gray.400" fontSize="16" me="26px">
					{currentPost.description}
				</Text>
			</Card>
		</Flex>
	)
}

export default Page
