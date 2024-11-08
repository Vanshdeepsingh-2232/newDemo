// client/src/components/Login.jsx
import React, { useState } from 'react';
import { auth } from '../firebase-config';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const googleProvider = new GoogleAuthProvider();

  const handleEmailAuth = async () => {
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Registration successful!');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login successful!');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Google Sign-in successful!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isRegistering ? 'Register' : 'Login'}
        </h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleEmailAuth}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition duration-200"
        >
          {isRegistering ? 'Register' : 'Login'}
        </button>

        <button
          onClick={handleGoogleAuth}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg mt-4 flex items-center justify-center transition duration-200"
        >
          <span className="material-icons-outlined">login</span>
          Sign in with Google
        </button>

        <button
          onClick={() => setIsRegistering(!isRegistering)}
          className="w-full text-sm text-blue-500 mt-4 hover:underline"
        >
          {isRegistering
            ? 'Already have an account? Login'
            : "Don't have an account? Register"}
        </button>
      </div>
    </div>
  );
};

export default Login;
