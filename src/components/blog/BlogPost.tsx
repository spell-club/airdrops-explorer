import React from 'react'
import { Post } from 'api/types'
import Card from '../card/Card'
import { Badge, Box, Flex, Text } from '@chakra-ui/react'
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
				<Flex
					gap={{ base: '0px', md: '25px' }}
					flexDir={{ base: 'column', md: 'row' }}
					my={{ base: '25px', md: '0px' }}
				>
					<Box
						bgImage={image}
						bgSize="cover"
						bgPosition="center"
						bgRepeat="no-repeat"
						w="270px"
						h="250px"
						pos="relative"
						borderRadius={20}
					/>

					<Flex flexDir="column" pt="30px" justify="space-between">
						<Flex gap={4} flexDir="column" align={{ base: 'center', md: 'start' }}>
							<Text fontSize={20} fontWeight={600}>
								{title}
							</Text>

							<Box maxH="145px" overflow="hidden">
								<Text fontSize={16} color="gray.100" maxW={500}>
									{description}
								</Text>
							</Box>
						</Flex>

						<Flex gap={3} align="center" mt={3} flexWrap="wrap">
							{tags.map((tag) => (
								<Badge key={tag}>{tag}</Badge>
							))}
						</Flex>
					</Flex>
				</Flex>

				<Text pos="absolute" top={{ base: '10px', md: '20px' }} right="20px" color="gray.400">
					{date}
				</Text>

				<Flex
					gap={2}
					color="gray.400"
					pos="absolute"
					bottom={{ base: '10px', md: '20px' }}
					right="20px"
					align="center"
				>
					<TimeIcon boxSize="12px" />
					<Text>{readingTime}</Text>
				</Flex>
			</Card>
		</Link>
	)
}

export default BlogPost
