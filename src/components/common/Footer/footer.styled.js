import styled from 'styled-components';

export const FooterLayout = styled.footer`
  border-top: 1px solid #666;
  padding: 1rem 0;
  font-size: 0.8rem;
  color: #666;
`;

export const FooterContent = styled.div`
  // max-width: 1200px;
  // margin: 0 auto;
`;
export const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CompanyText = styled.p`
  margin: 0;
`;
export const ToggleButton = styled.button`
  padding-left: 0;
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
`;

export const AdditionalInfo = styled.div`
  margin-top: 10px;
  background-color: #e9e9e9;
  border-radius: 4px;
  padding: 15px 15px;

  p {
    margin: 5px 0;
    line-height: 1.1rem;
  }
`;

export const Copyright = styled.p`
  margin-top: 20px;
  // text-align: center;
  margin-bottom: -1rem;
  padding: 10px 0;
  background-color: #e9e9e9;
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

export const ButtonItem = styled.li`
  margin-bottom: 8px;

  @media (min-width: 768px) {
    display: inline-block;
    margin-right: 16px;
    margin-bottom: 0;
  }
`;
export const GithubLink = styled.a`
  display: inline-block;
  margin-left: 16px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 8px;
  }
`;

export const GithubIcon = styled.img`
  width: 48px;
  height: 48px;
  vertical-align: middle;
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
