import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyD3GKxYx6uBuYcLKTgDcBUgQyQlWUCBJWE",
	authDomain: "delishbites-85637.firebaseapp.com",
	projectId: "delishbites-85637",
	storageBucket: "delishbites-85637.appspot.com",
	messagingSenderId: "518541411924",
	appId: "1:518541411924:web:8ee97d8c81fca21bd2cfc1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
