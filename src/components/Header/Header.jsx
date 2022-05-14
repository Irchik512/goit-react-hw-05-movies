import { HeaderD, Container, Nav, Link } from 'components/Header';

export const Header = () => {
  return (
    <HeaderD>
      <Container>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Container>
    </HeaderD>
  );
};
