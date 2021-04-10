import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CenteredHeader = styled.h1`
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: black;
`;

export const PillLabel = styled.span`
  background-color: white;
  display: inline-block;
  margin: 0.5rem;
  width: fit-content;
  padding: 0.5rem;
  border-radius: 10px;
`;

export const FontWrapper = styled.div<{ fontSize: string }>`
  font-size: ${({ fontSize }) => fontSize};
`;

export const MarginWrapper = styled.div<{ margin: string }>`
  margin: ${({ margin }) => margin};
`;
