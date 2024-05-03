'use client'
import { Flex, Grid } from '@chakra-ui/react'
import TopClaimersAndLosers from 'components/main/TopClaimersAndLosers'
import BlogPost from 'components/blog/BlogPost'
import { BLOG_API_URL } from 'api/blogApi/blogApi'
import Loader from 'components/UI/loader'
import { GetTopWinnersAndLosersResponse, TopParticipant } from 'api/types'
import { BlogPostsResponse } from 'api/blogApi/types'
import { useEffect, useState } from 'react'

interface Props {
	topWinnersAndLosers: GetTopWinnersAndLosersResponse<TopParticipant>
	blogPosts: BlogPostsResponse
}

const Page = ({ topWinnersAndLosers, blogPosts }: Props) => {
	const [isPostsLoading, setIsPostsLoading] = useState(true)

	useEffect(() => {
		if (blogPosts) {
			setIsPostsLoading(false)
		}
	}, [blogPosts])

	return (
		<Grid
			gridTemplateColumns={{ xl: '1fr 0.36fr', '2xl': '1fr 0.46fr' }}
			gap={{ base: '20px', xl: '20px' }}
			display={{ base: 'block', xl: 'grid' }}
		>
			<Flex flexDirection="column" gap="20px">
				{isPostsLoading ? (
					<Loader mt={10} />
				) : (
					blogPosts?.data.map(({ attributes, id }, idx) => (
						<BlogPost
							post={{
								title: attributes.title,
								description: attributes.preview_content,
								tags: attributes.tags.split(' '),
								readingTime: attributes.reading_time,
								image: BLOG_API_URL + attributes.image.data?.attributes?.url,
								date: new Date(attributes.createdAt).toLocaleDateString(),
								id: id,
								slug: attributes.slug,
							}}
							key={attributes.title + idx}
						/>
					))
				)}
			</Flex>

			<TopClaimersAndLosers topWinnersAndLosers={topWinnersAndLosers} />
		</Grid>
	)
}

export default Page
