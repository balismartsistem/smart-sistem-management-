import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault(); // Mencegah halaman reload saat form disubmit
    
    // Logika login sederhana
    if (username === 'admin' && password === '123') {
      setIsLoggedIn(true);
      alert('Login Berhasil!');
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
    <>
      {isLoggedIn ? (
        // Tampilan setelah login berhasil
        <div>
          <h2>Halo, {username}!</h2>
          <p>Selamat datang di Smart Sistem Management.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        // Tampilan form login
        <div>
          <h2>Login ke SSM</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </>
  );
}

export default App;