import styled from 'styled-components';

interface Props {
  flexDirection?: string;
  justifyContent?: string;
  flexWrap?: string;
  alignItems?: string;
  margin?: string;
}

// enables to reuse the boilerplate needed to create a flexbox wrapper and pass the different props in a clean way
const FlexWrapper = styled.div<Props>`
  display: flex;
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
	${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}
	${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
	${({ margin }) => margin && `margin: ${margin};`}
`;
export default FlexWrapper;
