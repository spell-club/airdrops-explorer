import React from 'react'
import { Post } from 'api/types'
import Card from '../card/Card'
import { Badge, Box, Flex, Image, Text } from '@chakra-ui/react'
import { TimeIcon } from '@chakra-ui/icons'
import Link from 'next/link'

interface Props {
	post: Post
}

const BlogPost = ({ post }: Props) => {
	const { image, title, date, description, tags, readingTime, id } = post
	return (
		<Link href={`/blog/post/${id}`}>
			<Card p="20px" cursor="pointer" position="relative">
				<Flex gap="34px">
					<Image src={image} w="270px" borderRadius={20} alt="post banner" />

					<Flex flexDir="column" pt="30px" justify="space-between">
						<Flex gap={5} flexDir="column">
							<Text fontSize={20} fontWeight={600}>
								{title}
							</Text>

							<Box maxH="120px" overflow="hidden">
								<Text fontSize={16} color="gray.400" maxW={400}>
									{description}
								</Text>
							</Box>
						</Flex>

						<Flex gap={4} align="center">
							{tags.map((tag) => (
								<Badge key={tag}>{tag}</Badge>
							))}
						</Flex>
					</Flex>
				</Flex>

				<Text pos="absolute" top="20px" right="20px" color="gray.400">
					{date}
				</Text>

				<Flex gap={2} color="gray.400" pos="absolute" bottom="20px" right="20px" align="center">
					<TimeIcon boxSize="12px" />
					<Text>{readingTime}</Text>
				</Flex>
			</Card>
		</Link>
	)
}

export default BlogPost
