import db from '../db';

export const createCollaboration = async (collab) => {
  const docRef = await db.collection('collaborations').add(collab);
  return docRef;
};

export const sendMessage = async (message) => {
  const docRef = await db
    .collection('users')
    .doc(message.toUser)
    .collection('messages')
    .add(message);

  return docRef;
};

export const subscribeToMessages = async (userId, cb) => {
  return db
    .collection('users')
    .doc(userId)
    .collection('messages')
    .onSnapshot((snapshot) => {
      const messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      cb(messages);
    });
};

export const markMessageAsRead = async (message) => {
  return await db
    .collection('users')
    .doc(message.toUser)
    .collection('messages')
    .doc(message.id)
    .update({ isRead: true });
};
