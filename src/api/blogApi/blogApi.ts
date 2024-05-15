import axios, { AxiosResponse } from 'axios'
import { BlogPostResponse, BlogPostsResponse } from './types'

export const BLOG_API_URL = 'https://cms.spell.club'

const blogApiClient = axios.create({
	baseURL: BLOG_API_URL,
	timeout: 5000,
})

const getBlogPosts = async (): Promise<BlogPostsResponse> => {
	return new Promise((resolve, reject) => {
		blogApiClient
			.get('/api/blogs?populate=*')
			.then((response: AxiosResponse<BlogPostsResponse>) => {
				resolve(response.data)
			})
			.catch((error) => {
				reject(error)
			})
	})
}

const getPostById = async (slug: string): Promise<BlogPostsResponse> => {
	return new Promise((resolve, reject) => {
		blogApiClient
			.get(`/api/blogs/?filters[slug]=${slug}&populate=*`)
			.then((response: AxiosResponse<BlogPostsResponse>) => {
				resolve(response.data)
			})
			.catch((error) => {
				reject(error)
			})
	})
}

export { getBlogPosts, getPostById }
