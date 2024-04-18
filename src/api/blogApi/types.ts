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

interface BlogPostImage {
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
interface BlogPostAttributes {
	title: string
	content: Record<string, unknown>[]
	preview_content: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	reading_time: string
	tags: string
	image: {
		data: BlogPostImage
	}
}

interface ResponseMeta {
	pagination: {
		page: number
		pageSize: number
		pageCount: number
		total: number
	}
}

interface BlogPostData {
	id: number
	attributes: BlogPostAttributes
}

interface BlogPostsResponse {
	data: BlogPostData[]
	meta: ResponseMeta
}

interface BlogPostResponse {
	data: BlogPostData
	meta: ResponseMeta
}

export type { BlogPostsResponse, BlogPostResponse }
