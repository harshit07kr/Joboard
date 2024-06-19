import React, { useState } from 'react'
import { auth } from '../../firebase.config'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const googleprovider = new GoogleAuthProvider()

const Signin = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate()

  const signinuser = () => {
    signInWithEmailAndPassword(auth, email, password).then(() => {
      navigate('/')
    })
  }

  const googlesignin = () => {
    signInWithPopup(auth, googleprovider).then(() => {
      navigate('/')
    })
  }

  return (
    <div className="signinpage flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-md">
        <h1 className="text-3xl text-center mb-6">Sign In</h1>
        <div className="mb-4">
          <label className="block text-lg mb-2">Enter your Email</label>
          <input 
            className="bg-gray-200 w-full p-2 rounded-md border border-gray-300" 
            onChange={e => setemail(e.target.value)} 
            value={email} 
            type="email" 
            placeholder="Enter your Email" 
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg mb-2">Enter your Password</label>
          <input 
            className="bg-gray-200 w-full p-2 rounded-md border border-gray-300" 
            onChange={e => setpassword(e.target.value)} 
            value={password} 
            type="password" 
            placeholder="Enter your Password" 
          />
        </div>
        <div className="flex flex-col space-y-4">
          <button 
            className="text-lg font-bold bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300" 
            onClick={signinuser}
          >
            Sign In
          </button>
          <button 
            className="text-lg font-bold bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-300" 
            onClick={googlesignin}
          >
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signin
