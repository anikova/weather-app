import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styled from 'styled-components';
import moment from 'moment';

// components
import FlexWrapper from '../../components/FlexWrapper';
import { MarginWrapper } from '../../components/SharedComponents';

// utils
import { getIcon } from '../../utils/iconsHelper';

// types
import { HourlyDetailsType } from '../../types/CityDetails';

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

interface Props {
  hourly: Array<HourlyDetailsType>;
}

const HourlyDetails = ({ hourly }: Props) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(6);
  const [displayArray, setDisplayArray] = useState(
    hourly.slice(startIndex, endIndex)
  );

  useEffect(() => {
    setDisplayArray(hourly.slice(startIndex, endIndex));
  }, [startIndex, endIndex, hourly]);

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
        {displayArray.map(
          ({ dt: dateTime, temp, weather }: HourlyDetailsType) => {
            const { icon } = weather[0];
            const IconComponent = getIcon[icon];
            return (
              <ItemWrapper
                key={dateTime}
                flexDirection="column"
                alignItems="center"
              >
                <span>{moment.unix(dateTime).format('HH:mm')}</span>
                <IconComponent size={30} />
                <span>{Math.round(temp)}&deg;</span>
              </ItemWrapper>
            );
          }
        )}
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
