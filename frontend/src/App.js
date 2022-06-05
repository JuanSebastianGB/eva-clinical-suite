import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='login' element={<Login />}></Route>
					<Route path='users'>
						<Route index element={<List />}></Route>
						<Route path=':userId' element={<Single />}></Route>
						<Route path='new' element={<New />}></Route>
					</Route>
					<Route path='products'>
						<Route index element={<List />}></Route>
						<Route path=':productId' element={<Single />}></Route>
						<Route path='new' element={<New />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
