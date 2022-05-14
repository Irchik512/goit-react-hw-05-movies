import styled from 'styled-components';

export const Wraper = styled.div`
  text-align: justify;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 15px;
  }
`;

export const Thumb = styled.div`
  width: 300px;
  height: 450px;
  margin: auto;
  object-fit: contain;
  & img {
    width: inherit;
    height: auto;
    overflow: hidden;
  }
`;

export const MovieTitle = styled.h1`
  @media screen and (max-width: 767px) {
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;
