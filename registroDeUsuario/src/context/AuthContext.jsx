import { createContext, useState, useEffect } from 'react';
import api from '../Services/api';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api
        .get('/user-data')
        .then((response) => setUser(response.data.user))
        .catch(() => logout());
    }
  }, []);
  const login = async (email, password) => {
    const response = response.data.data;
    console.log(response);
    localStorage.setItem('token', token);
    const profile = await api.get('/user-data');
    setUser(profile.data);
    navigate('/profile');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
