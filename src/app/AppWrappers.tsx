'use client'
import React, { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import theme from '../styles/theme/theme'

import 'styles/App.css'
import 'styles/Contact.css'
import 'styles/MiniCalendar.css'

const queryClient = new QueryClient()

export default function AppWrappers({ children }: { children: ReactNode }) {
	return (
		<CacheProvider>
			<QueryClientProvider client={queryClient}>
				<ChakraProvider theme={theme}>{children}</ChakraProvider>
			</QueryClientProvider>
		</CacheProvider>
	)
}
