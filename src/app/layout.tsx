'use client'
import React, { ReactNode } from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'

import AppWrappers from './AppWrappers'
import Head from './head'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <Head />

      <body id={'root'} className='chakra-ui-dark'>
        <AppWrappers>
          <Flex flexDir='column' minH='100vh'>
            <AppHeader />
            <Box as='main' flex='1 0 auto'>
              <Container maxW='container.xl' pt={30}>
                {children}
              </Container>
            </Box>
            <AppFooter />
          </Flex>
        </AppWrappers>
      </body>
    </html>
  )
}
