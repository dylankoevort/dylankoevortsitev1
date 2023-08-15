// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyAY7ktiSmVNIbNa_I_u2UqMcfO3UesDFXg',
	authDomain: 'dylankoevort-10909.firebaseapp.com',
	projectId: 'dylankoevort-10909',
	storageBucket: 'dylankoevort-10909.appspot.com',
	messagingSenderId: '910330976047',
	appId: '1:910330976047:web:7bb9ba97a726d752ac33da',
	measurementId: 'G-LNQSSDPWR2'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
