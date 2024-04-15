import axios, { AxiosResponse } from 'axios'

const BLOG_API_URL = 'https://cms.spell.club/api'

const blogApiClient = axios.create({
	baseURL: BLOG_API_URL,
	timeout: 30000,
})

interface BlogPostResponse {
	data: {
		id: number
		attributes: {
			createdAt: string
			updatedAt: string
			Content: string
			Title: string
			publish_date: string
			reading_time: string
			Banner: {
				data: {
					id: number
					attributes: {
						name: string
						alternativeText: null
						caption: null
						width: number
						height: number
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
	}[]
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
	data: {
		id: number
		attributes: {
			createdAt: string
			updatedAt: string
			Content: string
			Title: string
			publish_date: string
			reading_time: string
			Banner: {
				data: {
					id: number
					attributes: {
						name: string
						alternativeText: null
						caption: null
						width: number
						height: number
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
	meta: {
		pagination: {
			page: number
			pageSize: number
			pageCount: number
			total: number
		}
	}
}

const getBlogPosts = async (): Promise<BlogPostResponse> => {
	return new Promise((resolve, reject) => {
		blogApiClient
			.get('/blogs?populate=*')
			.then((response: AxiosResponse<BlogPostResponse>) => {
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
			.get(`/blogs/${id}?populate=*`)
			.then((response: AxiosResponse<BlogPostResponseSingle>) => {
				resolve(response.data)
			})
			.catch((error) => {
				reject(error)
			})
	})
}

export { getBlogPosts, getPostById }
