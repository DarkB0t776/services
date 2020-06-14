import db from '../db';

export const fetchServices = async () => {
  try {
    const collectionRef = await db.collection('services').get();
    const transformedData = collectionRef.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return transformedData;
  } catch (err) {
    console.log(err);
  }
};
