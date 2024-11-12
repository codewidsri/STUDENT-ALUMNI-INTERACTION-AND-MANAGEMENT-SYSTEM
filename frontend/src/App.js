import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Components/Pages/Register';
import Home from './Components/Pages/Home'
import Login from './Components/Pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
