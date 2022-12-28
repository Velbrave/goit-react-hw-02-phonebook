import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button onClick={() => onDeleteContact(id)} type="button">
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
