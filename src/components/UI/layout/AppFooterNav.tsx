import { chakra, Link as ChakraLink, Grid } from '@chakra-ui/react'
import Link from 'next/link'

const LINKS = [
	{ name: 'FAQ', path: '/faq' },
	{ name: 'Past', path: '/past' },
	{ name: 'Airdrops', path: '/airdrops' },
	{ name: 'Airdrop Alert', path: '/airdrop-alert' },
	{ name: 'Airdrop Finder', path: '/airdrop-finder' },
	{ name: 'Airdrop Eligibility', path: '/airdrop-eligibility' },
]

const AppFooterNav = chakra(({ className, onItemClick }) => {
	return (
		<Grid
			as="nav"
			gap={5}
			className={className}
			p="20px"
			templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(6, auto)' }}
		>
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
		</Grid>
	)
})

export default AppFooterNav
