import { Flex } from '@chakra-ui/react'

interface Props {
  icon: JSX.Element
  [x: string]: any
}

export default function IconBox(props: Props) {
  const { icon, ...rest } = props

  return (
    <Flex
      alignItems={'center'}
      justifyContent={'center'}
      borderRadius={'50%'}
      {...rest}
    >
      {icon}
    </Flex>
  )
}
