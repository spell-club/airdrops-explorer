'use client'
import React, { ReactNode } from 'react'
import 'styles/App.css'
import 'styles/Contact.css'
import 'styles/MiniCalendar.css'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import theme from 'styles/theme/theme'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { CalculatorContextProvider } from '../contexts/CalculatorContext'
import AppContainer from 'components/UI/layout/AppContainer'

const queryClient = new QueryClient()

export default function AppWrappers({ children }: { children: ReactNode }) {
	return (
		<CacheProvider>
			<QueryClientProvider client={queryClient}>
				<ChakraProvider theme={theme}>
					<CalculatorContextProvider>
						<AppContainer>{children}</AppContainer>
					</CalculatorContextProvider>
				</ChakraProvider>
			</QueryClientProvider>
		</CacheProvider>
	)
}
