import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts, addContact } from 'redux/contacts/operations';
import { changeFilter } from 'redux/contacts/actions';
import { useContacts } from 'hooks';
import { Title } from './ContactsView.styled';
import { Box } from 'components/Box';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

export const ContactsView = () => {
  const dispatch = useDispatch();
  const { isLoading, items, filter, error } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function handleSubmit({ name, number }) {
    const checkName = items.some(
      item => item.name.toLowerCase().trim() === name.toLowerCase().trim()
    );
    checkName
      ? alert(`${name} is already in contacts`)
      : dispatch(
          addContact({
            name,
            number,
          })
        );
  }

  function onFilterChange([value]) {
    dispatch(changeFilter(value));
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
