import React from 'react';
import { NavItem } from './Navigation.styled';
import { Box } from 'components/Box';
// import { useSelector } from 'react-redux';
// import { authSelectors } from '../../redux/auth';

export const Navigation = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const navItems = [
    { href: '/', text: 'Home' },
    // { href: '/', text: 'Home', icon: SomeIcon },
    // isLoggedIn && { href: 'contacts', text: 'Contacts' },
    { href: 'contacts', text: 'Contacts' },
  ];

  return (
    <Box as="nav" display="flex">
      {navItems.map(({ href, text }) => (
        <NavItem key={href} to={href}>
          {text}
        </NavItem>
      ))}
    </Box>
  );
};
