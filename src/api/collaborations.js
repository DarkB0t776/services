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
