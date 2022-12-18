import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
import { Item, Name, Number } from './ContactItem.styled';
import { Button } from '../Button';
import { deleteContact } from 'redux/contacts/operations';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

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
