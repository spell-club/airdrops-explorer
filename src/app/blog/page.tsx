'use client'
import { Center, Flex, Grid, Spinner } from '@chakra-ui/react'
import TopClaimersAndLosers from 'components/main/TopClaimersAndLosers'
import BlogPost from 'components/blog/BlogPost'
import { useQuery } from '@tanstack/react-query'
import { BLOG_API_URL, getBlogPosts } from 'api/blogApi/blogApi'
import Loader from 'components/UI/loader'

const Page = () => {
	const { data: blogPosts, isLoading: isPostsLoading } = useQuery({
		queryKey: ['blogPosts'],
		queryFn: () => getBlogPosts(),
	})

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
								image: BLOG_API_URL + attributes.image.data.attributes.url,
								date: new Date(attributes.createdAt).toLocaleDateString(),
								id: id,
							}}
							key={attributes.title + idx}
						/>
					))
				)}
			</Flex>

			<TopClaimersAndLosers />
		</Grid>
	)
}

export default Page
