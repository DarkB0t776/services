import * as collabApi from '../../api/collaborations';
import * as offersApi from '../../api/offers';
import {
  COLLABORATION_CREATED_FROM_OFFER,
  FETCH_USER_MESSAGES_SUCCESS,
  FETCH_USER_MESSAGES_REQUEST,
  FETCH_USER_MESSAGES_FAIL,
  MARK_MESSAGE_AS_READ,
} from '../types';

export const collaborate = ({ collaboration, message }) => async (dispatch) => {
  try {
    const collabData = await collabApi.createCollaboration(collaboration);

    message.cta = `/collaborations/${collabData.id}`;
    await collabApi.sendMessage(message);
    await offersApi.markOfferAsInCollaboration(collaboration.fromOffer);

    dispatch({
      type: COLLABORATION_CREATED_FROM_OFFER,
      payload: collaboration.fromOffer,
      offersType: 'sent',
    });
  } catch (err) {
    throw err.message;
  }
};

export const subscribeToMessages = (userId) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_USER_MESSAGES_REQUEST });
    await collabApi.subscribeToMessages(userId, (messages) =>
      dispatch({
        type: FETCH_USER_MESSAGES_SUCCESS,
        messages,
      })
    );
  } catch (err) {
    dispatch({ type: FETCH_USER_MESSAGES_FAIL, error: err.message });
  }
};

export const markMessageAdRead = (message) => async (dispatch) => {
  try {
    await collabApi.markMessageAsRead(message);
    dispatch({
      type: MARK_MESSAGE_AS_READ,
      id: message.id,
    });
  } catch {}
};
