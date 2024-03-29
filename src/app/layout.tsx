'use client'
import React, { ReactNode } from 'react'
import AppWrappers from './AppWrappers'
import Head from './head'
import { Container, Flex } from '@chakra-ui/react'
import AppHeader from '../components/AppHeader'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <Head />
      <body id={'root'} className='chakra-ui-dark'>
        <AppWrappers>
          <Flex flexDir='column' minH='100vh'>
            <AppHeader />
            <Container maxW='container.xl' pt={30}>
              {children}
            </Container>
          </Flex>
        </AppWrappers>
      </body>
    </html>
  )
}
