import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 16px 0;
  font-size: 1.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    opacity: 0.7;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <StyledLink to="/">Project 名前</StyledLink>
      <StyledLink to="/menu">メニュー</StyledLink>
    </HeaderWrapper>
  );
};

export default Header;