import {
  FETCH_OFFER_REQUEST,
  FETCH_SENT_OFFER_SUCCESS,
  FETCH_RECEIVED_OFFER_SUCCESS,
  FETCH_OFFER_FAIL,
  CHANGE_OFFER_STATUS,
} from '../types';

import * as offersApi from '../../api/offers';

const extractDataFromOffer = async (offer, userType) => {
  const service = await offer.service.get();
  const user = await offer[userType].get();

  offer.service = service.data();
  offer.service.id = service.id;
  offer[userType] = user.data();

  return offer;
};

export const createOffer = (offer) => {
  return offersApi.createOffer(offer);
};

export const fetchOffers = (userId, type) => {
  return async (dispatch) => {
    try {
      const userType = type === 'sent' ? 'toUser' : 'fromUser';
      const typeSuccess =
        type === 'sent'
          ? FETCH_SENT_OFFER_SUCCESS
          : FETCH_RECEIVED_OFFER_SUCCESS;
      dispatch({ type: FETCH_OFFER_REQUEST });
      const offers = await offersApi.fetchOffers(userId, type);

      const modifiedOffers = await Promise.all(
        offers.map((offer) => extractDataFromOffer(offer, userType))
      );

      dispatch({
        type: typeSuccess,
        payload: modifiedOffers,
      });
    } catch (err) {
      dispatch({
        type: FETCH_OFFER_FAIL,
        payload: err,
      });
    }
  };
};

export const changeOfferStatus = (offerId, status) => {
  return async (dispatch) => {
    await offersApi.changeOfferStatus(offerId, status);
    dispatch({
      type: CHANGE_OFFER_STATUS,
      payload: offerId,
      status,
    });
  };
};
