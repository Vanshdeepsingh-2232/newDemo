// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCTCLXZFpjCn781HoDDMq1rf4hYkrYCrJc',
  authDomain: 'collaborationecosys.firebaseapp.com',
  projectId: 'collaborationecosys',
  storageBucket: 'collaborationecosys.firebasestorage.app',
  messagingSenderId: '612758626450',
  appId: '1:612758626450:web:e214c6f9818d020ee1864b',
  measurementId: 'G-XD0623G81T',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
