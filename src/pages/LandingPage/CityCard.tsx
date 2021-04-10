import React from 'react';
import styled from 'styled-components';
import { FaWind } from 'react-icons/fa';
import { GiWaterDrop } from 'react-icons/gi';

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

const CardWrapper = styled.div<{ color: string; background: any }>`
  position: relative;
  border: 1px solid gray;
  border-radius: 20px;
  padding: 3rem 1rem;
  margin: 2rem;
  min-width: 300px;
  box-shadow: 0 0 8px 6px lightgray;
  background: ${({ background: { firstColor, secondColor } }) =>
    `linear-gradient(150deg, ${firstColor} 0%, ${secondColor} 70%)`};
  color: ${({ color }) => color};
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

  const IconComponent = getIcon[icon];

  const formattedName = name.toLowerCase().split(' ').join('-');

  return (
    <CardWrapper color={getColor(icon)} background={getBackground[icon]}>
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
            <GiWaterDrop />
            {humidity} %
          </PillLabel>
          <PillLabel>
            <FaWind /> {speed} m/s
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
        <StyledLink href={`/weather-app/city-details/${formattedName}`}>
          View details
        </StyledLink>
      </PillLabel>
    </CardWrapper>
  );
};

export default CityCard;
