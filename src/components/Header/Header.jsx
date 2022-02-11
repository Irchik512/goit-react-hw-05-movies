import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 80px;
`;
const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;
const Link = styled(NavLink)`
  &.active {
    color: tomato;
  }
`;

export const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <Link to="/home">Home</Link>
        <Link to="/movie">Movie</Link>
      </Nav>
      <Outlet></Outlet>
    </Wrapper>
  );
};
