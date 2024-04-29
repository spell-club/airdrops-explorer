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

interface ImageFormats {
	thumbnail: ImageFormatData
	large: ImageFormatData
	small: ImageFormatData
	medium: ImageFormatData
}

interface BlogPostImageAttributes {
	name: string
	alternativeText: null
	caption: null
	width: number
	height: number
	formats: ImageFormats
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

interface BlogPostImage {
	id: number
	attributes: BlogPostImageAttributes
}

interface BlogPostAttributesImage {
	data: BlogPostImage
}

interface SEOAttributes {
	id: number
	metaTitle: string
	metaDescription: string
}

interface BlogPostAttributes {
	title: string
	SEO: SEOAttributes[]
	content: Record<string, unknown>[]
	preview_content: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	reading_time: string
	tags: string
	image: BlogPostAttributesImage
	preview_image: BlogPostAttributesImage
}

interface Pagination {
	page: number
	pageSize: number
	pageCount: number
	total: number
}

interface ResponseMeta {
	pagination: Pagination
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
