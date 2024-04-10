'use client'
import { PropsWithChildren } from 'react'
import { Box, CircularProgress, Flex } from '@chakra-ui/react'

interface Props extends PropsWithChildren {
	value: number
	color?: string
}

const DonutChart = ({ children, value, color = 'purple.100' }: Props) => {
	return (
		<Box pos="relative">
			<CircularProgress
				value={value}
				capIsRound
				size={200}
				color={color}
				thickness={7}
				transform="rotate(90deg)"
			/>
			<Flex pos="absolute" w="100%" h="100%" justify="center" align="center" top="0">
				{children}
			</Flex>
		</Box>
	)
}

export default DonutChart
