import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Layout from './components/Layout';
import VerificationPage from './pages/VerificationPage';

import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      const checkToken = async () => {
        try {
          const decoded = jwtDecode(token);
          console.log(decoded);
          setIsLoggedIn(true);
        } catch (error) {
          console.log(error);
          setIsLoggedIn(false);
        }
      };

      checkToken();
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  if (isLoggedIn === undefined) {
    console.log('i run undefinded');
    return <p>Loading...</p>;
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              element={
                isLoggedIn === false ? <Outlet /> : <Navigate to="/home" />
              }
            >
              <Route element={<AuthPage />} path="/" />
              <Route element={<Login />} path="/login" />
              <Route element={<Signup />} path="/signup" />
              <Route
                element={<VerificationPage setIsLoggedIn={setIsLoggedIn} />}
                path="/verify-token"
              />
            </Route>
            <Route
              element={
                isLoggedIn ? (
                  <Home setIsLoggedIn={setIsLoggedIn} />
                ) : (
                  <Navigate to="/" />
                )
              }
              path="/home"
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
