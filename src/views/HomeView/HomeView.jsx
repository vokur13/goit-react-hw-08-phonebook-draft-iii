import { Box } from 'components/Box';
import { Title } from './HomeView.styled';

export const HomeView = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontSize="72px"
      color="#010101"
    >
      <Title>PhoneBook</Title>
    </Box>
  );
};
