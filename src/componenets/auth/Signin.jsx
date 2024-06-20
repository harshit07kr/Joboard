import React, { useState } from 'react';
import { auth } from '../../firebase.config';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const googleProvider = new GoogleAuthProvider();

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const signinUser = () => {
        setError("");  // Clear previous errors
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
              setError("Invalid Credentials ! Please try again.");
            });
    };

    const googleSignin = () => {
        setError("");  // Clear previous errors
        signInWithPopup(auth, googleProvider)
            .then(() => {
                navigate('/');
            })
    };

    return (
        <div className="signinpage flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
                <h1 className="text-4xl text-center mb-4">Sign In</h1>
                {error && <div className="bg-red-100 text-red-700 p-2 rounded-md mb-4">{error}</div>}
                <label className="block text-xl mb-2">Enter your Email</label>
                <input
                    className="bg-slate-300 w-full rounded-md p-2 mb-4"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Enter your Email"
                />
                <label className="block text-xl mb-2">Enter your password</label>
                <input
                    className="bg-slate-300 w-full rounded-md p-2 mb-4"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Enter your password"
                />
                <button
                    className="text-sm md:text-xl font-bold bg-blue-500 p-2 rounded-md hover:scale-105 duration-500 text-white w-full mb-4"
                    onClick={signinUser}
                >
                    Sign In
                </button>
                <button
                    className="text-sm md:text-xl font-bold bg-red-500 p-2 rounded-md hover:scale-105 duration-500 text-white w-full"
                    onClick={googleSignin}
                >
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Signin;
