import {
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	useColorModeValue,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function SearchBar(props: {
	variant?: string
	background?: string
	children?: JSX.Element
	placeholder?: string
	borderRadius?: string | number
	onSearch?: (value: string) => void
	[x: string]: any
}) {
	// Pass the computed styles into the `__css` prop
	const { variant, background, children, placeholder, borderRadius, onSearch, ...rest } = props

	const { push } = useRouter()

	// Chakra Color Mode
	const searchIconColor = useColorModeValue('gray.700', 'white')
	const inputBg = useColorModeValue('secondaryGray.300', 'navy.900')
	const inputText = useColorModeValue('gray.700', 'gray.100')

	const [value, setValue] = useState('')

	const handleSearch = () => {
		if (value) {
			onSearch(value)
			push(`/profile/${value}`)
		}

		if (value) {
			setValue('')
		}
	}

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && value) {
			handleSearch()
		}
	}

	return (
		<InputGroup w={{ base: '100%', md: '420px' }} {...rest}>
			<InputLeftElement>
				<IconButton
					aria-label="search"
					bg="inherit"
					borderRadius="inherit"
					_active={{
						bg: 'inherit',
						transform: 'none',
						borderColor: 'transparent',
					}}
					_focus={{
						boxShadow: 'none',
					}}
					_hover={{}}
					icon={<SearchIcon color={searchIconColor} w="15px" h="15px" />}
					onClick={handleSearch}
				/>
			</InputLeftElement>

			<Input
				border="1px solid"
				borderColor="navy.700"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				variant="search"
				fontSize="sm"
				bg={background ? background : inputBg}
				color={inputText}
				fontWeight="500"
				_placeholder={{ color: 'gray.400', fontSize: '14px' }}
				borderRadius={borderRadius ? borderRadius : '30px'}
				placeholder={placeholder ? placeholder : 'Search by address'}
				onKeyDown={handleKeyDown}
			/>
		</InputGroup>
	)
}
