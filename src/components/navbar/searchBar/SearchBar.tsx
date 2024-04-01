import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
export function SearchBar(props: {
  variant?: string
  background?: string
  children?: JSX.Element
  placeholder?: string
  borderRadius?: string | number
  [x: string]: any
}) {
  // Pass the computed styles into the `__css` prop
  const { variant, background, children, placeholder, borderRadius, ...rest } =
    props
  // Chakra Color Mode
  const searchIconColor = useColorModeValue('gray.700', 'white')
  const inputBg = useColorModeValue('secondaryGray.300', 'navy.900')
  const inputText = useColorModeValue('gray.700', 'gray.100')
  const inputRef = useRef<HTMLInputElement>(null)
  const { push } = useRouter()

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputRef.current?.value) {
      push(`/profile/${inputRef.current.value}`)
    }
  }

  return (
    <InputGroup w={{ base: '100%', md: '420px' }} {...rest}>
      <InputLeftElement>
        <IconButton
          aria-label='search'
          bg='inherit'
          borderRadius='inherit'
          _active={{
            bg: 'inherit',
            transform: 'none',
            borderColor: 'transparent',
          }}
          _focus={{
            boxShadow: 'none',
          }}
          icon={<SearchIcon color={searchIconColor} w='15px' h='15px' />}
        />
      </InputLeftElement>

      <Input
        ref={inputRef}
        variant='search'
        fontSize='sm'
        bg={background ? background : inputBg}
        color={inputText}
        fontWeight='500'
        _placeholder={{ color: 'gray.400', fontSize: '14px' }}
        borderRadius={borderRadius ? borderRadius : '30px'}
        placeholder={placeholder ? placeholder : 'Search...'}
        onKeyDown={handleKeyDown}
      />
    </InputGroup>
  )
}
