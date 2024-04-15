'use client'
import { Flex, Grid } from '@chakra-ui/react'
import TopClaimersAndLosers from 'components/main/TopClaimersAndLosers'
import { BLOG_POSTS } from '../../constants'
import BlogPost from '../../components/blog/BlogPost'
import { useQuery } from '@tanstack/react-query'
import { getBlogPosts } from 'api/blogApi'

const Page = () => {
	const { data: blogPosts, isLoading: isPostsLoading } = useQuery({
		queryKey: ['blogPosts'],
		queryFn: () => getBlogPosts(),
	})

	console.log(blogPosts, isPostsLoading)

	return (
		<Grid
			gridTemplateColumns={{ xl: '1fr 0.36fr', '2xl': '1fr 0.46fr' }}
			gap={{ base: '20px', xl: '20px' }}
			display={{ base: 'block', xl: 'grid' }}
		>
			<Flex flexDirection="column" gap="20px">
				{blogPosts?.data.map(({ attributes, id }, idx) => (
					<BlogPost
						post={{
							title: attributes.Title,
							description: attributes.Content,
							tags: [],
							readingTime: attributes.reading_time,
							image: 'https://cms.spell.club' + attributes.Banner.data.attributes.url,
							date: new Date(attributes.createdAt).toLocaleDateString(),
							id: id,
						}}
						key={attributes.Title + idx}
					/>
				))}
				{BLOG_POSTS.map((post, idx) => (
					<BlogPost post={post} key={post.title + idx} />
				))}
			</Flex>

			<TopClaimersAndLosers />
		</Grid>
	)
}

export default Page
