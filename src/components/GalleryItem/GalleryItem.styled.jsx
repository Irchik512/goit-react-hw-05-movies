import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieItem = styled.li`
  max-width: 300px;
  overflow: hidden;
`;
export const ItemLink = styled(Link)`
  width: 100%;
  height: inherit;
  align-items: center;
  text-decoration: none;
  color: black;
`;
export const ItemImage = styled.img`
  display: block;
  object-fit: contain;
`;
export const ItemTitle = styled.p`
  margin: 10px 0 0;
  text-wrap: wrap;
`;
