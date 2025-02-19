import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthoContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
    } catch (err) {
      console.log(err);
      alert('Error al iniciar sesión');
    }
  };
  return (
    <div className='container mt-5 w-50'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className='d-flex flex-column'>
        <input
          type='email'
          placeholder='correo'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className='mb-3'
        />
        <input
          type='password'
          placeholder='Contraseña'
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
          className='mb-3'
        />
        <button type='submit' className='w-50'>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};
export default Login;
