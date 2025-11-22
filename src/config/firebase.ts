// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7sd4k9StTcZK6qe9SilrguOmHkWEyEig",
  authDomain: "city-pulse-8302e.firebaseapp.com",
  projectId: "city-pulse-8302e",
  storageBucket: "city-pulse-8302e.firebasestorage.app",
  messagingSenderId: "77842775360",
  appId: "1:77842775360:web:6664955b35feaa45334ea5",
  measurementId: "G-9LRTNPVP2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, );
export const analytics = getAnalytics(app);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});