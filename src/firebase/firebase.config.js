// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5S13TEKP6pUspykmyHUtXLtpzLA1WEwI",
    authDomain: "faiza-grocery-shop.firebaseapp.com",
    projectId: "faiza-grocery-shop",
    storageBucket: "faiza-grocery-shop.appspot.com",
    messagingSenderId: "535172145544",
    appId: "1:535172145544:web:543d8d91971b7ba244da3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;