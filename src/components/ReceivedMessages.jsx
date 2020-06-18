import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as collabActions from '../redux/actions/collaborations';

const ReceivedMessages = () => {
  const messages = useSelector((state) => state.userMessages.items);
  const dispatch = useDispatch();

  const handleMessageAsRead = (message) => {
    dispatch(collabActions.markMessageAdRead(message));
  };

  const renderMessages = (messages) => {
    if (messages.length === 0) {
      return <div className='navbar-item'>No Messages</div>;
    }
    const filteredMessages = messages
      .filter((m) => !m.isRead)
      .map((message) => (
        <div key={message.id}>
          <div className='from-user'>
            <span>From: </span>
            {message.fromUser.name}
          </div>
          <hr />
          <div className='navbar-item navbar-item-message'>
            <div>{message.text}</div>
            <Link onClick={() => {}} to={message.cta}>
              <div className='button is-success'>Join</div>
            </Link>
            <button
              onClick={() => handleMessageAsRead(message)}
              className='button is-warning'
            >
              Later
            </button>
          </div>
        </div>
      ));

    return filteredMessages;
  };

  return renderMessages(messages);
};

export default ReceivedMessages;
