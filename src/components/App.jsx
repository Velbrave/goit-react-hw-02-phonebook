import React from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // contacts: [],
    filter: '',
  };

  handleSubmitData = ({ name, number }) => {
    const userId = nanoid();
    const contact = { id: userId, name, number };

    this.state.contacts.find(contact => contact.name === name)
      ? alert('This contact already exists')
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  filteredContacts = () => {
    const normalizeFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const visibleContacts = this.filteredContacts();
    const { handleSubmitData, changeFilter, deleteContact } = this;

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleSubmitData} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={changeFilter} />
        <ContactList
          onContacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  }
}

export default App;
