import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='top'>
				<div className='logo'>Eva</div>
			</div>
			<hr />
			<div className='center'>
				<ul>
					<p className='title'>MAIN</p>
					<li>
						<DashboardIcon className='icon' />
						<span>Dashboard</span>
					</li>
					<p className='title'>LISTS</p>
					<li>
						<PersonOutlineIcon className='icon' />
						<span>Users</span>
					</li>
					<li>
						<ProductionQuantityLimitsOutlinedIcon className='icon' />
						<span>Products</span>
					</li>
					<li>
						<ListAltOutlinedIcon className='icon' />
						<span>Orders</span>
					</li>
					<li>
						<LocalShippingOutlinedIcon className='icon' />
						<span>Delivery</span>
					</li>
					<p className='title'>USEFUL</p>
					<li>
						<QueryStatsOutlinedIcon className='icon' />
						<span>Stats</span>
					</li>
					<li>
						<NotificationsActiveOutlinedIcon className='icon' />
						<span>Notifications</span>
					</li>
					<p className='title'>SERVICE</p>
					<li>
						<HealthAndSafetyOutlinedIcon className='icon' />
						<span>System Health</span>
					</li>
					<li>
						<BookOutlinedIcon className='icon' />
						<span>Logs</span>
					</li>
					<li>
						<SettingsOutlinedIcon className='icon' />
						<span>Settings</span>
					</li>
					<p className='title'>USER</p>
					<li>
						<PeopleOutlineOutlinedIcon className='icon' />
						<span>Profile</span>
					</li>
					<li>
						<LogoutOutlinedIcon className='icon' />
						<span>Logout</span>
					</li>
				</ul>
			</div>
			<div className='bottom'>
				<div className='colorOption'></div>
				<div className='colorOption'></div>
			</div>
		</div>
	);
};

export default Sidebar;
