import { chakra, Flex, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS = [
	{ name: 'Blog', path: '/blog' },
	{ name: 'Calculator', path: '/calculator' },
]

const AppNav = chakra(({ className, isMobile = false, onItemClick }) => {
	const currentPath = usePathname()
	const isActive = (path: string) => currentPath === path

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
					prefetch={false}
				>
					{link.name}
				</ChakraLink>
			))}
		</Flex>
	)
})

export default AppNav
