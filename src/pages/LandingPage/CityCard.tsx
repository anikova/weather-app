import React from 'react';
import styled from 'styled-components';
import { FaWind } from 'react-icons/fa';
import { IoMdWater } from 'react-icons/io';

// components
import FlexWrapper from '../../components/FlexWrapper';
import {
  FontWrapper,
  PillLabel,
  StyledLink,
} from '../../components/SharedComponents';

// utils
import { getBackground, getColor, getIcon } from '../../utils/iconsHelper';

// types
import { CityType } from '../../types/City';

const CardWrapper = styled.div<{ icon: string }>`
  position: relative;
  border: 1px solid gray;
  border-radius: 20px;
  padding: 3rem 1rem;
  margin: 2rem;
  min-width: 300px;
  box-shadow: 0 0 8px 6px lightgray;
  background: ${({ icon }) => icon && getBackground(icon)};
  color: ${({ icon }) => icon && getColor(icon)};
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

const LabelsWrapper = styled.div<{ color: string }>`
  text-align: center;
  margin-top: 1rem;
  color: black;
`;

interface Props {
  city: CityType;
}

const CityCard = ({ city }: Props) => {
  const {
    weather,
    main: { temp, humidity },
    name,
    wind: { speed },
  } = city;
  const { main: description, icon } = weather[0];
  const IconComponent = getIcon(icon);
  return (
    <CardWrapper icon={icon}>
      <div>
        <FlexWrapper justifyContent="space-around">
          <IconComponent size={100} />
          <FlexWrapper flexDirection="column">
            <FontWrapper fontSize="1.5rem">{name}</FontWrapper>
            <FontWrapper fontSize="4rem">{Math.round(temp)} &deg;</FontWrapper>
          </FlexWrapper>
        </FlexWrapper>
        <LabelsWrapper color={getColor(icon)}>
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
