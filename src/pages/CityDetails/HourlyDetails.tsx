import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaSun } from 'react-icons/fa';
import styled from 'styled-components';

// components
import FlexWrapper from '../../components/FlexWrapper';
import { MarginWrapper } from '../../components/SharedComponents';

const ItemWrapper = styled(FlexWrapper)`
  border: 1px solid black;
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 15px;
  > * {
    margin: 0.15rem;
  }
`;

const StyledIcon = styled(FaArrowRight)`
  cursor: pointer;
`;

const HourlyDetails = ({ hourly }: any) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(6);
  const [displayArray, setDisplayArray] = useState(
    hourly.slice(startIndex, endIndex)
  );

  useEffect(() => {
    setDisplayArray(hourly.slice(startIndex, endIndex));
  }, [startIndex, endIndex]);

  return (
    <>
      <MarginWrapper margin="1rem 0 0 0">In the next 24 hours</MarginWrapper>
      <FlexWrapper flexWrap="wrap" justifyContent="center" alignItems="center">
        {startIndex > 0 && (
          <StyledIcon
            as={FaArrowLeft}
            onClick={() => {
              setStartIndex(startIndex - 1);
              setEndIndex(endIndex - 1);
            }}
          />
        )}
        {displayArray.map(({ dt: dateTime, temp }: any) => {
          return (
            <ItemWrapper
              key={dateTime}
              flexDirection="column"
              alignItems="center"
            >
              <span>{dateTime}</span>
              <FaSun size={30} />
              <span>{temp}&deg;</span>
            </ItemWrapper>
          );
        })}
        {endIndex < hourly.length && (
          <StyledIcon
            onClick={() => {
              setStartIndex(startIndex + 1);
              setEndIndex(endIndex + 1);
            }}
          />
        )}
      </FlexWrapper>
    </>
  );
};

export default HourlyDetails;
