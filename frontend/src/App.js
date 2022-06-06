import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { productInputs, userInputs } from './sourceForm';
import './style/dark.scss';
import { DarkModeContext } from './context/darkModeContext';
import { useContext } from 'react';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='users'>
            <Route index element={<List />}></Route>
            <Route path=':userId' element={<Single />}></Route>
            <Route
              path='new'
              element={<New inputs={userInputs} title='Add New User' />}
            ></Route>
          </Route>
          <Route path='products'>
            <Route index element={<List />}></Route>
            <Route path=':productId' element={<Single />}></Route>
            <Route
              path='new'
              element={<New inputs={productInputs} title='Add New Product' />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
