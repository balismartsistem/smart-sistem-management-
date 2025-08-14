import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const validUser = {
    username: 'admin',
    password: '123'
  };

  const handleLogin = (e, navigate) => {
    e.preventDefault();
    if (username === validUser.username && password === validUser.password) {
      setIsLoggedIn(true);
      alert('Login Berhasil!');
      navigate('/dashboard'); // Arahkan ke halaman dashboard
    } else {
      alert('Username atau password salah!');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogin={handleLogin}
          />
        } />
        <Route path="/dashboard" element={
          <Dashboard username={username} handleLogout={handleLogout} />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
