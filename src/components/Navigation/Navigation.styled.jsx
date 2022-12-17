import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  // gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[0]}px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }

  &.active {
    // background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;
