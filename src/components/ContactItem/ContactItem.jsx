import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks';
// import { useDeleteContactMutation } from 'redux/contacts/contacts';
// import { toast } from 'react-toastify';
import { Item, Name, Number } from './ContactItem.styled';
import { Button } from '../Button';
// import { contactsOperations } from 'redux/contactsHW7';
import { deleteContact } from 'redux/contacts/operations';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const { isDeleting } = useContacts();
  // const isLoading = useSelector(contactsSelectors.selectIsLoading);
  // const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  // const notify = text => toast(text);

  return (
    <Item>
      <Name>{name + ':'}</Name>
      <Number>{number}</Number>
      <Button
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        // disabled={!isDeleting}
      >
        Delete
        {/* {!isDeleting ? 'Deleting...' : 'Delete'} */}
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
