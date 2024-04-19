import {
	Box,
	chakra,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	Flex,
	IconButton,
	useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from 'components/icons/Logo'
import AppNav from './AppNav'
import { useRef } from 'react'
import { SearchBar } from '../searchBar'
import { onSearch } from 'utils/analytics'

const AppMobileMenu = chakra(({ className }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = useRef()

	return (
		<Box className={className}>
			<IconButton
				variant="outline"
				colorScheme="whiteAlpha"
				p={3}
				borderRadius={8}
				boxSize={12}
				bg="grey.300"
				color="white"
				cursor="pointer"
				border="none"
				icon={<HamburgerIcon boxSize={5} />}
				aria-label="Open mobile menu"
				onClick={onOpen}
				ref={btnRef}
			/>

			<Drawer onClose={onClose} isOpen={isOpen} size="full" trapFocus={false}>
				<DrawerContent bg="navy.800">
					<DrawerHeader display="flex" justifyContent="space-between" alignItems="center">
						<Logo />
						<DrawerCloseButton pos="static" />
					</DrawerHeader>
					<DrawerBody
						display="flex"
						textAlign="center"
						justifyContent="start"
						alignItems="center"
						flexDirection="column"
						gap={20}
					>
						<Flex w="100%" justify="center">
							<SearchBar
								onSearch={(value) => {
									onSearch(value)
									onClose()
								}}
							/>
						</Flex>

						<AppNav isMobile onItemClick={onClose} />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	)
})

export default AppMobileMenu
