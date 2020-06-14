import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDzDhKCm6wGKuFA16C1H7bc_BbrgwEv0CY',
  authDomain: 'services-e0bd7.firebaseapp.com',
  databaseURL: 'https://services-e0bd7.firebaseio.com',
  projectId: 'services-e0bd7',
  storageBucket: 'services-e0bd7.appspot.com',
  messagingSenderId: '527652757170',
  appId: '1:527652757170:web:2b881892267bf1f41eb3ab',
  measurementId: 'G-07QQWYHM2P',
};

const db = firebase.initializeApp(firebaseConfig).firestore();

export default db;

export const { Timestamp } = firebase.firestore;
