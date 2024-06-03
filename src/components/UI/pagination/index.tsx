import React from 'react'
import { Flex, Button, Text } from '@chakra-ui/react'

interface PaginationProps {
	currentPage: number
	totalPages: number
	onPageChange: (page: number) => void
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
	const handleNextPage = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1)
		}
	}

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1)
		}
	}

	return (
		<Flex justifyContent="space-between" mt="20px">
			<Button onClick={handlePreviousPage} disabled={currentPage === 1} mr="10px">
				Previous
			</Button>
			<Text alignSelf="center">
				Page {currentPage} of {totalPages}{' '}
			</Text>
			<Button onClick={handleNextPage} disabled={currentPage === totalPages}>
				Next
			</Button>
		</Flex>
	)
}

export default Pagination
