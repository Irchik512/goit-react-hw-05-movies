import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderD = styled.header`
  box-shadow: 1px 1px 5px 1px;
  padding: 20px 0;
`;
export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 600;
  &.active {
    color: tomato;:
  }
`;
export const Container = styled.div`
  box-sizing: border-box;
  padding: 0 40px;
  width: 100%;
  text-align center;
`;
