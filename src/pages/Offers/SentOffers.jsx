import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import * as offerActions from '../../redux/actions/offers';

import withAuthorization from '../../components/hoc/withAuthorization';
import ServiceItem from '../../components/ServiceItem/ServiceItem';

const SentOffers = ({ userId }) => {
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offers.sent);

  useEffect(() => {
    dispatch(offerActions.fetchOffers(userId, 'sent'));
  }, []);

  return (
    <div className='container'>
      <div className='content-wrapper'>
        <h1 className='title'>Sent Offers</h1>
        <div className='columns'>
          <div className='column is-one-third'>
            {offers.map((offer) => (
              <ServiceItem
                key={offer.id}
                noButton
                className='offer-card'
                {...offer.service}
              >
                <div className='tag is-large'>{offer.status}</div>
                <hr />
                <div className='service-offer'>
                  <div>
                    <span className='label'>To User:</span>{' '}
                    {offer.toUser.fullName}
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
              </ServiceItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

SentOffers.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default withAuthorization()(SentOffers);
