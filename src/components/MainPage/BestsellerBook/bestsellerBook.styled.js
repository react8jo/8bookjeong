import styled from 'styled-components';

export const Title = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  margin-left: 0rem;
  font-size: 24px;
  font-weight: 700;
  //font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
    hr {
      display: none;
    }
  }
`;

export const TitleName = styled.h3`
  margin-left: 1.5rem;
`;
