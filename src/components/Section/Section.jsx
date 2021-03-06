import PropTypes from 'prop-types';
import { Section, Title, Container } from 'components/Section';

export const Sections = ({ title, children }) => {
  return (
    <Section>
      <Container>
        {title && <Title>{title}</Title>}
        {children}
      </Container>
    </Section>
  );
};

Sections.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
