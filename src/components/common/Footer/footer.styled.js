import styled from 'styled-components';

export const FooterLayout = styled.footer`
  border-top: 1px solid #666;
  padding: 1rem;
  font-size: 0.8rem;
  color: #666;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const CompanyInfo = styled.div`
  margin-bottom: 10px;

  p {
    margin: 5px 0;
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
`;

export const AdditionalInfo = styled.div`
  margin-top: 10px;

  p {
    margin: 5px 0;
  }
`;

export const Copyright = styled.p`
  margin-top: 20px;
  text-align: center;
`;
export const ButtonList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
`;

export const ButtonLink = styled.a`
  color: #666;
  text-decoration: none;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;
