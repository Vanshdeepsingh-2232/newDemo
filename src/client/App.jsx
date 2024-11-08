// client/src/App.jsx
import React, { useEffect, useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from 'react-router-dom';
//import { onAuthStateChanged } from 'firebase/auth';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Auth from '@/components/Auth';
import { auth } from '@/firebase-config';
import { Button } from '@/components/ui/button';
import Login from '@/components/login';
import Register from '@/components/register';

function App() {
  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
