import React from 'react';
import styled from 'styled-components';
import { FaCloudSun, FaWind } from 'react-icons/fa';
import { IoMdWater } from 'react-icons/io';

// components
import FlexWrapper from '../../components/FlexWrapper';
import {
  FontWrapper,
  PillLabel,
  StyledLink,
} from '../../components/SharedComponents';

const CardWrapper = styled.div`
  position: relative;
  border: 1px solid gray;
  border-radius: 20px;
  padding: 3rem 1rem;
  margin: 2rem;
  min-width: 300px;
  box-shadow: 0 0 8px 6px lightgray;
  background: linear-gradient(150deg, #fd746c8c 0%, #3f51b55e 70%);
  cursor: pointer;
  transition: all 0.5s;

  :hover {
    transform: scale(1.1);
    > div {
      filter: blur(10px);
    }
  }

  :not(:hover) {
    > span {
      display: none;
    }
  }
`;

const LabelsWrapper = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const CityCard = ({ city }: any) => {
  const {
    weather,
    main: { temp, humidity },
    name,
    wind: { speed },
  } = city;
  const { main: description } = weather[0];

  return (
    <CardWrapper>
      <div>
        <FlexWrapper justifyContent="space-around">
          <FaCloudSun size={100} />
          <FlexWrapper flexDirection="column">
            <FontWrapper fontSize="1.5rem">{name}</FontWrapper>
            <FontWrapper fontSize="4rem">{temp} &deg;</FontWrapper>
          </FlexWrapper>
        </FlexWrapper>
        <LabelsWrapper>
          <PillLabel>{description}</PillLabel>
          <PillLabel>
            <IoMdWater />
            {humidity}
          </PillLabel>
          <PillLabel>
            <FaWind /> {speed} km/h
          </PillLabel>
        </LabelsWrapper>
      </div>
      <PillLabel
        style={{
          position: 'absolute',
          top: '40%',
          left: '33%',
        }}
      >
        <StyledLink href={`/city-details/${name.toLowerCase()}`}>
          View details
        </StyledLink>
      </PillLabel>
    </CardWrapper>
  );
};

export default CityCard;
