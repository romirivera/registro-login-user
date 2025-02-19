import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import Welcome from './Pages/Welcome';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route
        path='/profile'
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
