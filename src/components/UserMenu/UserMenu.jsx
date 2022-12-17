// import { authOperations, authSelectors } from '../../redux/auth';
// import { useDispatch, useSelector } from 'react-redux';
import { Box } from 'components/Box';
import { Paragraph } from './UserMenu.styled';
import { Button } from 'components/Button';

export const UserMenu = () => {
  // const dispatch = useDispatch();
  // const email = useSelector(authSelectors.getUseremail);

  return (
    <Box display="flex" alignItems="center">
      {/* <Paragraph>{email}</Paragraph> */}
      <Paragraph>email@msn.com</Paragraph>
      {/* <Button type="button" onClick={() => dispatch(authOperations.logOut())}> */}
      <Button type="button">Logout</Button>
    </Box>
  );
};

// const styles = {
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   avatar: {
//     marginRight: 4,
//   },
//   name: {
//     fontWeight: 700,
//     marginRight: 12,
//   },
// };
