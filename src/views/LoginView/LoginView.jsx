import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm';
import { Box } from 'components/Box';

export const LoginView = () => {
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
        <title>Login</title>
      </Helmet>
      <h2>Login</h2>
      <LoginForm />
    </Box>
  );
};
