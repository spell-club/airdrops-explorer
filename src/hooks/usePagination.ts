import { useEffect, useState } from 'react'
import { useMediaQuery } from '@chakra-ui/react'
import { breakpoints } from 'styles/theme/foundations/breakpoints'

const usePagination = (data: any[]) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [isLargerThanMd] = useMediaQuery(`(min-width: ${breakpoints.md})`)

	const itemsPerPage = isLargerThanMd ? 3 : 1 // Number of items to display per page

	// Calculate the indices for the current page
	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentData = data.slice(indexOfFirstItem, indexOfLastItem)

	// Calculate total pages
	const totalPages = Math.ceil(data.length / itemsPerPage)

	const handlePageChange = (page: number) => {
		setCurrentPage(page)
	}

	useEffect(() => {
		if (currentPage > totalPages) {
			setCurrentPage(totalPages)
		}
	}, [isLargerThanMd, currentPage, totalPages])

	return { currentData, currentPage, totalPages, handlePageChange }
}

export default usePagination
