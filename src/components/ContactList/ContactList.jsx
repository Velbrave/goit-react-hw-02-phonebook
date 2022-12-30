import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ onContacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {onContacts.map(({ id, name, number }) => {
        return (
          <li className={css.listItem} key={id}>
            {name}: {number}
            <button
              className={css.listButton}
              onClick={() => onDeleteContact(id)}
              type="button"
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.protoTypes = {
  onContacts: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.number,
  }),
  onDeleteContact: PropTypes.func,
};
