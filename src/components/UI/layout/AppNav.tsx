import { chakra, Flex, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

const LINKS = [
	{ name: 'Blog', path: '/blog' },
	{ name: 'Calculator', path: '/calculator' },
	{ name: 'Upcoming', path: '/upcoming' },
	{ name: 'About', path: '/about' },
]

const AppNav = chakra(({ className, isMobile = false, onItemClick }) => {
	return (
		<Flex as="nav" gap={5} className={className} flexDir={isMobile ? 'column' : 'row'}>
			{LINKS.map((link) => (
				<ChakraLink
					as={Link}
					fontSize={18}
					fontWeight={500}
					key={link.path}
					href={link.path}
					color="grey.100"
					transition=".3s all"
					opacity={0.85}
					_hover={{
						opacity: 1,
						color: 'white',
					}}
					onClick={onItemClick}
				>
					{link.name}
				</ChakraLink>
			))}
		</Flex>
	)
})

export default AppNav
