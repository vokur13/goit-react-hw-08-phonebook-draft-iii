import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm';
import { Box } from 'components/Box';

export const RegisterView = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      // justifyContent="center"
      alignItems="center"
      // fontSize="72px"
      color="#010101"
      paddingTop={75}
    >
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <h2>Register</h2>
      <RegisterForm />
    </Box>
  );
};
