import React from 'react';
import { NavItem } from './Navigation.styled';
import { Box } from 'components/Box';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const navItems = [
    { href: '/', text: 'Home' },
    // { href: '/', text: 'Home', icon: SomeIcon },
    isLoggedIn && { href: 'contacts', text: 'Contacts' },
    // { href: 'contacts', text: 'Contacts' },
  ];

  return (
    <Box as="nav" display="flex">
      {navItems.map(({ href, text }) => (
        <NavItem key={href} to={href}>
          {text}
        </NavItem>
      ))}
      {/* <NavItem to="/">Home</NavItem>
      {isLoggedIn && <NavItem to="/contacts">Contacts</NavItem>} */}
    </Box>
  );
};
