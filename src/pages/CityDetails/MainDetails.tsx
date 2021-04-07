import React from 'react';
import { FaSun } from 'react-icons/fa';
import styled from 'styled-components';

// components
import FlexWrapper from '../../components/FlexWrapper';

const DescriptionWrapper = styled.div`
  font-size: 4rem;
  margin-left: 5rem;
`;

const MainDetails = ({ temp, icon }: any) => {
  return (
    <>
      <div>Current temperature</div>
      <FlexWrapper
        flexDirection="row"
        style={{
          justifyContent: 'flex-start',
          border: '1px solid black',
          padding: '1rem',
          borderRadius: '15px',
          margin: '1rem 0',
          maxWidth: '300px',
          alignItems: 'center',
        }}
      >
        <FaSun size={100} />
        <DescriptionWrapper>{temp} &deg;</DescriptionWrapper>
      </FlexWrapper>
    </>
  );
};

export default MainDetails;
