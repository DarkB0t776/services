import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchServiceById } from '../../redux/actions';

import OfferModal from '../../components/OfferModal/OfferModal';
import Spinner from '../../components/Spinner/Spinner';

const ServiceDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const service = useSelector((state) => state.serviceById.item);
  const { isFetching } = useSelector((state) => state.serviceById);

  useEffect(() => {
    dispatch(fetchServiceById(id));
  }, [id, dispatch]);

  if (isFetching) return <Spinner />;

  return (
    <section className='hero is-fullheight is-default is-bold'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <div className='columns is-vcentered'>
            <div className='column is-5'>
              <figure className='image is-4by3'>
                <img src={service.image} alt='Description' />
              </figure>
            </div>
            <div className='column is-6 is-offset-1'>
              <h1 className='title is-2'>{service.title}</h1>
              <h2 className='subtitle is-4'>{service.description}</h2>
              <br />
              <div className='has-text-centered'>
                <OfferModal service={service} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='hero-foot'>
        <div className='container'>
          <div className='tabs is-centered'>
            <ul>
              <li>
                <button>And this is the bottom</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
