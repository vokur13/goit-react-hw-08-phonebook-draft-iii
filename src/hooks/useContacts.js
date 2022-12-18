import { useSelector } from 'react-redux';
import {
  selectLoading,
  selectDeleting,
  selectFilter,
  selectAllContacts,
  selectError,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const isLoading = useSelector(selectLoading);
  const isDeleting = useSelector(selectDeleting);
  const filter = useSelector(selectFilter);
  const items = useSelector(selectAllContacts);
  const error = useSelector(selectError);

  return {
    isLoading,
    isDeleting,
    filter,
    items,
    error,
  };
};
