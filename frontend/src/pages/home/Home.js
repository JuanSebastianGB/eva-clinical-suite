import Chart from '../../components/chart/Chart';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import './home.scss';
const Home = () => {
	return (
		<div className='home'>
			<Sidebar />
			<div className='homeContainer'>
				<Navbar />
				Home container
				<div className='widgets'>
					<Widget type='user' />
					<Widget type='order' />
					<Widget type='earning' />
				</div>
				<div className='charts'>
					<Chart title='Last 6 Months (Revenue)' aspect={2 / 1} />
				</div>
			</div>
		</div>
	);
};

export default Home;
