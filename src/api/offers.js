import db from '../db';

export const createOffer = async (offer) => {
  return await db.collection('offers').add(offer);
};
