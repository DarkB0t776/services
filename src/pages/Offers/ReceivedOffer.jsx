import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import * as offerActions from '../../redux/actions/offers';

import withAuthorization from '../../components/hoc/withAuthorization';
import ServiceItem from '../../components/ServiceItem/ServiceItem';

const ReceivedOffer = ({ userId }) => {
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offers.received);

  useEffect(() => {
    dispatch(offerActions.fetchOffers(userId, 'received'));
  }, []);

  const acceptOffer = (offer) => {
    alert(`Accepting ${JSON.stringify(offer)}`);
  };
  const declineOffer = (offer) => {
    alert(`Declining ${JSON.stringify(offer)}`);
  };

  return (
    <div className='container'>
      <div className='content-wrapper'>
        <h1 className='title'>Received Offers</h1>
        <div className='columns'>
          <div className='column is-one-third'>
            {offers.map((offer) => (
              <ServiceItem
                noButton
                key={offer.id}
                className='offer-card'
                {...offer.service}
              >
                <div className='tag is-large'>{offer.status}</div>
                <hr />
                <div className='service-offer'>
                  <div>
                    <span className='label'>From User:</span>{' '}
                    {offer.fromUser.fullName}
                  </div>
                  <div>
                    <span className='label'>Note:</span> {offer.note}
                  </div>
                  <div>
                    <span className='label'>Price:</span> ${offer.price}
                  </div>
                  <div>
                    <span className='label'>Time:</span> {offer.time} hours
                  </div>
                </div>
                <div>
                  <hr />
                  <button
                    onClick={() => acceptOffer(offer)}
                    className='button is-success'
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => declineOffer(offer)}
                    className='button is-danger'
                  >
                    Decline
                  </button>
                </div>
              </ServiceItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ReceivedOffer.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default withAuthorization()(ReceivedOffer);
