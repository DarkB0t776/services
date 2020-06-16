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

export const fetchServiceById = async (serviceId) => {
  const snapshot = await db.collection('services').doc(serviceId).get();

  return { id: snapshot.id, ...snapshot.data() };
};

export const fetchUserServices = async (userId) => {
  try {
    const collectionRef = await db
      .collection('services')
      .where('user', '==', userId)
      .get();
    const transformedData = collectionRef.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return transformedData;
  } catch (err) {
    throw err;
  }
};

export const createService = async (service) => {
  try {
    console.log(service);
    const docRef = await db.collection('services').add(service);
    return docRef;
  } catch (err) {
    throw err.message;
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

export const logout = () => firebase.auth().signOut();

export const onAuthStateChanged = (cb) => {
  return firebase.auth().onAuthStateChanged(cb);
};

export const getUserProfile = async (uid) => {
  const snapShot = await db.collection('users').doc(uid).get();

  return { uid, ...snapShot.data() };
};

// export const createUserRef = (userId) => {
//   return db.doc(`users/${userId}`);
// }

export const createRef = (collection, docId) => {
  return db.doc(`${collection}/${docId}`);
};
