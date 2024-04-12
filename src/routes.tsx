import { Icon } from '@chakra-ui/react'
import { MdBarChart, MdPerson, MdHome, MdLock, MdOutlineShoppingCart } from 'react-icons/md'

import { IRoute } from 'types/navigation'

const routes: IRoute[] = [
	{
		name: 'Main Dashboard',
		layout: '/admin',
		path: '/default',
		icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
	},
	{
		name: 'NFT Marketplace',
		layout: '/admin',
		path: '/drops',
		icon: <Icon as={MdOutlineShoppingCart} width="20px" height="20px" color="inherit" />,
		secondary: true,
	},
	{
		name: 'Data Tables',
		layout: '/admin',
		icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
		path: '/data-tables',
	},
	{
		name: 'Profile',
		layout: '/admin',
		path: '/profile',
		icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
	},
	{
		name: 'Sign In',
		layout: '/auth',
		path: '/sign-in',
		icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
	},
]

export default routes
