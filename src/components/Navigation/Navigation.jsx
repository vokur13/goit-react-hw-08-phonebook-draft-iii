import React from 'react';
import { NavItem } from './Navigation.styled';
import { Box } from 'components/Box';
import { useAuth } from 'hooks';
import { nanoid } from 'nanoid';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const navItems = [
    { id: nanoid(), href: '/', text: 'Home' },
    // { href: '/', text: 'Home', icon: SomeIcon },
    isLoggedIn && { id: nanoid(), href: 'contacts', text: 'Contacts' },
    // { href: 'contacts', text: 'Contacts' },
  ];

  return (
    <Box as="nav" display="flex">
      {navItems.map(({ id, href, text }) => (
        <NavItem key={id} to={href}>
          {text}
        </NavItem>
      ))}
    </Box>
  );
};
