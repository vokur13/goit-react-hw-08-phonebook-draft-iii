import { Box } from 'components/Box';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      as="header"
      position="fixed"
      width={1}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg="#3caea3"
      px={4}
      boxShadow="0px 4px 8px 0px rgba(34, 60, 80, 0.42)"
    >
      <Box
        as="nav"
        display="flex"
        flex={1}
        justifyContent="space-between"
        py={3}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
    </Box>
  );
};
