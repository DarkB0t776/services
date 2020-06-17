import * as collabApi from '../../api/collaborations';
import * as offersApi from '../../api/offers';
import { COLLABORATION_CREATED_FROM_OFFER } from '../types';

export const collaborate = ({ collaboration, message }) => async (dispatch) => {
  const collabData = await collabApi.createCollaboration(collaboration);

  message.cta = `/collaborations/${collabData.id}`;
  await collabApi.sendMessage(message);
  await offersApi.markOfferAsInCollaboration(collaboration.fromOffer);

  dispatch({
    type: COLLABORATION_CREATED_FROM_OFFER,
    payload: collaboration.fromOffer,
    offersType: 'sent',
  });
};
