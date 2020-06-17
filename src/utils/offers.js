import { Timestamp } from '../db';

export const createNewCollaboration = ({
  offer: { service, time, toUser, id },
  fromUser,
}) => {
  return {
    serviceId: service.id,
    title: service.title,
    image: service.image,
    time: time * 60 * 60,
    allowedUsers: [fromUser.uid, toUser.uid],
    joinedUsers: [],
    toUser: toUser.uid,
    fromUser: fromUser.uid,
    fromOffer: id,
    createdAt: Timestamp.fromDate(new Date()),
  };
};

export const createNewMessage = ({ offer: { service, toUser }, fromUser }) => {
  return {
    isRead: false,
    type: 'invitation',
    text: `Hello, ${toUser.fullName}. Please join to collaboration as soon as possible`,
    cta: '',
    toUser: toUser.uid,
    fromUser: {
      name: fromUser.fullName,
      avatar: fromUser.avatar,
    },
    serviceTitle: service.title,
    serviceLink: `/services/${service.id}`,
    createdAt: Timestamp.fromDate(new Date()),
  };
};
