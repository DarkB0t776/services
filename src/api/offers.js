import db from '../db';
import { createRef } from './index';

export const createOffer = async (offer) => {
  return await db.collection('offers').add(offer);
};

export const fetchOffers = async (userId, type) => {
  try {
    const userType = type === 'sent' ? 'fromUser' : 'toUser';
    const userRef = createRef('users', userId);

    const sentOffers = await db
      .collection('offers')
      .where(userType, '==', userRef)
      .get();
    const transformedData = sentOffers.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return transformedData;
  } catch (err) {
    throw err.message;
  }
};

export const changeOfferStatus = async (offerId, status) => {
  await db.collection('offers').doc(offerId).update({ status });
};

export const markOfferAsInCollaboration = async (offerId) => {
  await db
    .collection('offers')
    .doc(offerId)
    .update({ collaborationCreated: true });
};
