import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
import { fetchContacts, addContact } from 'redux/contacts/operations';
// import { selectLoading } from 'redux/tasks/selectors';
import { useContacts } from 'hooks';
import { Title } from './ContactsView.styled';

import { useMemo } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {
//   useGetContactsQuery,
//   useAddContactMutation,
// } from 'redux/contacts/contacts';
// import { contactsSelectors, contactsSlice } from 'redux/contacts';
import { Box } from 'components/Box';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { nanoid } from 'nanoid';

export const ContactsView = () => {
  const dispatch = useDispatch();
  const { isLoading, items, filter, error } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // const { data, error, isUninitialized, isFetching } = useGetContactsQuery('', {
  //   // skip: '' === '',
  //   // pollingInterval: 3000,
  //   // refetchOnFocus: true,
  //   refetchOnReconnect: true,
  // });

  // const [addContact, { isLoading }] = useAddContactMutation();
  // const filter = useSelector(contactsSelectors.selectFilter);
  // const notify = text => toast(text);

  function handleSubmit({ name, number }) {
    const checkName = items.some(
      item => item.name.toLowerCase().trim() === name.toLowerCase().trim()
    );
    checkName
      ? alert(`${name} is already in contacts`)
      : dispatch(
          addContact({
            // id: nanoid(),
            name,
            number,
          })
        );
  }

  function onFilterChange([value]) {
    // dispatch(contactsSlice.findContact(value));
    // !value
    //   ? dispatch(contactsSlice.findContact((value = '')))
    //   : dispatch(contactsSlice.findContact(value));
  }

  const filteredItems = useMemo(() => {
    if (filter) {
      return items.filter(item => {
        return item.name
          .toLowerCase()
          .trim()
          .includes(filter.toLowerCase().trim());
      });
    }
    return items;
  }, [filter, items]);

  return (
    <Box
      width={1}
      p={4}
      as="main"
      paddingTop={75}
      display="grid"
      gridTemplateColumns="1fr 1fr"
    >
      <Box width={1}>
        {error && <p>{error}</p>}
        <Title>Add contact</Title>
        <ContactForm onFormSubmit={handleSubmit} />
        <h2>Find contact</h2>
        <Filter onChange={onFilterChange} />
      </Box>
      <Box width={1}>
        {isLoading && <p>Loading contacts...</p>}
        {items && items.length > 0 && <ContactList list={filteredItems} />}
      </Box>
    </Box>
  );
};
