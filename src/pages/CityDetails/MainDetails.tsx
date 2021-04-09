import React from 'react';
import styled from 'styled-components';

// components
import FlexWrapper from '../../components/FlexWrapper';

// utils
import { getIcon } from '../../utils/iconsHelper';

const DescriptionWrapper = styled.div`
  font-size: 4rem;
  margin-left: 5rem;
`;

const Wrapper = styled(FlexWrapper)`
  border: 1px solid black;
  padding: 1rem;
  border-radius: 15px;
  margin: 1rem 0;
  max-width: 300px;
  align-items: center;
`;

interface Props {
  temp: number;
  icon: string;
}

const MainDetails = ({ temp, icon }: Props) => {
  const IconComponent = getIcon[icon];
  return (
    <>
      <div>Current temperature</div>
      <Wrapper flexDirection="row" justifyContent="flex-start">
        <IconComponent size={100} />
        <DescriptionWrapper>{Math.round(temp)} &deg;</DescriptionWrapper>
      </Wrapper>
    </>
  );
};

export default MainDetails;
