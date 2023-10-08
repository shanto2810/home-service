import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineUser,
	HiOutlineSearchCircle,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'services',
		label: 'Services',
		path: '/services',
		icon: <HiOutlineCube />
	},
	{
		key: 'orders',
		label: 'Orders',
		path: '/orders',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'users',
		label: 'Users',
		path: '/users',
		icon: <HiOutlineUsers />
	},
	{
		key: 'employee',
		label: 'Employee',
		path: '/employee',
		icon: <HiOutlineUser />
	},
	{
		key: 'jobrequest',
		label: 'Job Request',
		path: '/jobrequest',
		icon: <HiOutlineSearchCircle />
	}
]

