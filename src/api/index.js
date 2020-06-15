import firebase from 'firebase/app';
import 'firebase/auth';
import db from '../db';

// Services

export const fetchServices = async () => {
  try {
    const collectionRef = await db.collection('services').get();
    const transformedData = collectionRef.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return transformedData;
  } catch (err) {
    throw err;
  }
};

// Auth

export const createUserProfile = (userProfile) =>
  db.collection('users').doc(userProfile.uid).set(userProfile);

export const registerUser = async ({ email, password, fullName, avatar }) => {
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const { user } = response;

    const userProfile = {
      uid: user.uid,
      fullName,
      email,
      avatar,
      services: [],
      description: '',
    };

    await createUserProfile(userProfile);
    return userProfile;
  } catch (err) {
    throw err.message;
  }
};

export const login = async ({ email, password }) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    throw err.message;
  }
};
