import { useSelector } from 'react-redux';
import {
  selectLoading,
  selectFilter,
  selectAllContacts,
  selectError,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const isLoading = useSelector(selectLoading);
  const filter = useSelector(selectFilter);
  const items = useSelector(selectAllContacts);
  const error = useSelector(selectError);

  return {
    isLoading,
    filter,
    items,
    error,
  };
};
