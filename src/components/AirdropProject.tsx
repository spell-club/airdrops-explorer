import React, { useMemo } from 'react'
import Card from './card/Card'
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import numbro from 'numbro'

interface Props {
  id: number
  image: string
  name: string
  avgAmount: number
  airdropAmount: number
  tokenSymbol: string
}

const AirdropProject = ({
  image,
  name,
  avgAmount,
  airdropAmount,
  tokenSymbol,
  id,
}: Props) => {
  const textColor = useColorModeValue('navy.700', 'white')
  const textColorBid = useColorModeValue('brand.500', 'white')
  const { push } = useRouter()

  const averageAmount = useMemo(() => {
    const roundFormat = {
      trimMantissa: true,
      thousandSeparated: true,
      average: true,
    }

    return String(numbro(avgAmount).format(roundFormat)).replace(/,/g, ' ')
  }, [avgAmount])

  const totalAmount = useMemo(() => {
    const roundFormat = {
      trimMantissa: true,
      thousandSeparated: true,
      average: true,
    }

    return String(numbro(airdropAmount).format(roundFormat)).replace(/,/g, ' ')
  }, [airdropAmount])

  return (
    <Card
      p='20px'
      onClick={() => push(`/drop/${name.toLowerCase()}`)}
      cursor='pointer'
    >
      <Flex direction={{ base: 'column' }} justify='center'>
        <Box mb={{ base: '20px', '2xl': '20px' }} position='relative'>
          <AspectRatio ratio={7 / 5}>
            <Image src={image} w={'100%'} borderRadius='20px' alt='' />
          </AspectRatio>
        </Box>
        <Flex flexDirection='column' justify='space-between' h='100%'>
          <Flex
            justify='space-between'
            direction={{
              base: 'row',
              md: 'column',
              lg: 'row',
              xl: 'column',
              '2xl': 'row',
            }}
            mb='auto'
          >
            <Flex direction='column'>
              <Text
                color={textColor}
                fontSize={{
                  base: 'xl',
                  md: 'lg',
                  lg: 'lg',
                  xl: 'lg',
                  '2xl': 'md',
                  '3xl': 'lg',
                }}
                mb='5px'
                fontWeight='bold'
                me='14px'
              >
                {name}
              </Text>
              <Text
                color='secondaryGray.600'
                fontSize={{
                  base: 'sm',
                }}
                fontWeight='400'
                me='14px'
              >
                Avg.amount {averageAmount} {tokenSymbol}
              </Text>
            </Flex>
            {/* chains list */}
            {/*<AvatarGroup*/}
            {/*  max={3}*/}
            {/*  color={textColorBid}*/}
            {/*  size='sm'*/}
            {/*  mt={{*/}
            {/*    base: '0px',*/}
            {/*    md: '10px',*/}
            {/*    lg: '0px',*/}
            {/*    xl: '10px',*/}
            {/*    '2xl': '0px',*/}
            {/*  }}*/}
            {/*  fontSize='12px'*/}
            {/*>*/}
            {/*  {bidders.map((avt, key) => (*/}
            {/*    <Avatar key={key} h={'32px'} w={'32px'} src={avt.src} />*/}
            {/*  ))}*/}
            {/*</AvatarGroup>*/}
          </Flex>
          <Flex
            align={{
              base: 'center',
              md: 'start',
              lg: 'center',
              xl: 'start',
              '2xl': 'center',
            }}
            justify='space-between'
            direction={{
              base: 'row',
              md: 'column',
              lg: 'row',
              xl: 'column',
              '2xl': 'row',
            }}
            mt='25px'
          >
            <Text fontWeight='700' fontSize='sm' color={textColorBid}>
              {totalAmount} {tokenSymbol}
            </Text>
            <Link
              mt={{
                base: '0px',
                md: '10px',
                lg: '0px',
                xl: '10px',
                '2xl': '0px',
              }}
            >
              <Button
                variant='darkBrand'
                color='white'
                fontSize='sm'
                fontWeight='500'
                borderRadius='70px'
                px='24px'
                py='5px'
                onClick={() => push(`/drop/${name.toLowerCase()}`)}
              >
                Read More
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  )
}

export default AirdropProject
