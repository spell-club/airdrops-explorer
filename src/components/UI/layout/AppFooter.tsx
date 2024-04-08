import React from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'

import Logo from 'assets/icons/Logo'

const AppFooter = () => {
  // let linkColor = 'white'
  return (
    <Box
      as='footer'
      h='75px'
      bg='navy.800'
      borderTop='1px solid'
      borderColor='navy.700'
    >
      <Container maxW='container.xl' h='100%'>
        <Flex w='100%' h='100%' align='center' justify='space-between'>
          <Logo />

          {/*<List display='flex'>*/}
          {/*  <ListItem*/}
          {/*    me={{*/}
          {/*      base: '20px',*/}
          {/*      md: '44px',*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <Link*/}
          {/*      fontWeight='500'*/}
          {/*      color={linkColor}*/}
          {/*      href='mailto:hello@simmmple.com'*/}
          {/*    >*/}
          {/*      Terms of services*/}
          {/*    </Link>*/}
          {/*  </ListItem>*/}
          {/*  <ListItem*/}
          {/*    me={{*/}
          {/*      base: '20px',*/}
          {/*      md: '44px',*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <Link*/}
          {/*      fontWeight='500'*/}
          {/*      color={linkColor}*/}
          {/*      href='https://www.simmmple.com/licenses'*/}
          {/*    >*/}
          {/*      Contact us*/}
          {/*    </Link>*/}
          {/*  </ListItem>*/}
          {/*  <ListItem*/}
          {/*    me={{*/}
          {/*      base: '20px',*/}
          {/*      md: '44px',*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <Link*/}
          {/*      fontWeight='500'*/}
          {/*      color={linkColor}*/}
          {/*      href='https://simmmple.com/terms-of-service'*/}
          {/*    >*/}
          {/*      Docs*/}
          {/*    </Link>*/}
          {/*  </ListItem>*/}
          {/*  <ListItem*/}
          {/*    me={{*/}
          {/*      base: '20px',*/}
          {/*      md: '44px',*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <Link*/}
          {/*      fontWeight='500'*/}
          {/*      color={linkColor}*/}
          {/*      href='https://www.blog.simmmple.com/'*/}
          {/*    >*/}
          {/*      Twitter*/}
          {/*    </Link>*/}
          {/*  </ListItem>*/}

          {/*  <ListItem>*/}
          {/*    <Link*/}
          {/*      fontWeight='500'*/}
          {/*      color={linkColor}*/}
          {/*      href='https://www.blog.simmmple.com/'*/}
          {/*    >*/}
          {/*      Discord*/}
          {/*    </Link>*/}
          {/*  </ListItem>*/}
          {/*</List>*/}
        </Flex>
      </Container>
    </Box>
  )
}

export default AppFooter
