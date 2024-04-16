import axios, { AxiosResponse } from 'axios'

export const BLOG_API_URL = 'https://cms.spell.club'

const blogApiClient = axios.create({
	baseURL: BLOG_API_URL,
	timeout: 30000,
})

interface ImageFormatData {
	name: string
	hash: string
	ext: string
	mime: string
	path: null
	width: number
	height: number
	size: number
	sizeInBytes: number
	url: string
}

interface BlogPostData {
	id: number
	attributes: {
		title: string
		content: Record<string, unknown>[]
		preview_content: string
		createdAt: string
		updatedAt: string
		publishedAt: string
		reading_time: string
		tags: string
		image: {
			data: {
				id: number
				attributes: {
					name: string
					alternativeText: null
					caption: null
					width: number
					height: number
					formats: {
						thumbnail: ImageFormatData
						large: ImageFormatData
						small: ImageFormatData
						medium: ImageFormatData
					}
					hash: string
					ext: string
					mime: string
					size: number
					url: string
					previewUrl: null
					provider: string
					provider_metadata: null
					createdAt: string
					updatedAt: string
				}
			}
		}
	}
}

interface BlogPostsResponse {
	data: BlogPostData[]
	meta: {
		pagination: {
			page: number
			pageSize: number
			pageCount: number
			total: number
		}
	}
}

interface BlogPostResponseSingle {
	data: BlogPostData
	meta: {
		pagination: {
			page: number
			pageSize: number
			pageCount: number
			total: number
		}
	}
}

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

const getPostById = async (id: number): Promise<BlogPostResponseSingle> => {
	return new Promise((resolve, reject) => {
		blogApiClient
			.get(`/api/blogs/${id}?populate=*`)
			.then((response: AxiosResponse<BlogPostResponseSingle>) => {
				resolve(response.data)
			})
			.catch((error) => {
				reject(error)
			})
	})
}

export { getBlogPosts, getPostById }
