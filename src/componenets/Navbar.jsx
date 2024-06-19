// Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.config';

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleSigninClick = () => {
    navigate('/signin');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleLogoutClick = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="h-20 flex items-center w-full text-white px-4 md:px-20">
      <div className="text-3xl font-bold">Joboard.</div>
      <div className="flex items-center justify-center ml-auto space-x-2 md:space-x-4">
        {user ? (
          <div className="flex items-center space-x-2 md:space-x-4">
            <h1 className="hidden sm:block text-sm md:text-xl">Hello! {user.email}</h1>
            <button
              onClick={handleLogoutClick}
              className="text-sm md:text-xl font-bold bg-blue-500 p-2 rounded-md hover:scale-105 duration-500"
            >
              Log out
            </button>
          </div>
        ) : (
          <div className="flex space-x-2 md:space-x-4">
            <button
              onClick={handleSigninClick}
              className="text-sm md:text-xl font-bold bg-blue-500 p-2 rounded-md hover:scale-105 duration-500"
            >
              Sign in
            </button>
            <button
              onClick={handleSignupClick}
              className="text-sm md:text-xl font-bold bg-blue-500 p-2 rounded-md hover:scale-105 duration-500"
            >
              Sign up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
