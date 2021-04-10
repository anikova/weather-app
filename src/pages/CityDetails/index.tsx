import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { RiLoader2Fill } from 'react-icons/ri';

// actions
import { fetchCity } from '../../actions/cities';

// components
import FlexWrapper from '../../components/FlexWrapper';
import { CenteredHeader, StyledLink } from '../../components/SharedComponents';
import HourlyDetails from './HourlyDetails';
import MainDetails from './MainDetails';
import DailyDetails from './DailyDetails';

// utils
import { cityCoords } from '../../utils/cityData';

// types
import { RootState } from '../../types/RootState';

const Wrapper = styled.div`
  width: 70vw;
  min-height: 50vh;
  border: 1px solid gray;
  margin: 0 auto 3rem auto;
  border-radius: 20px;
  box-shadow: 0 0 8px 6px lightgray;
  background: linear-gradient(150deg, #fd746c8c 0%, #3f51b55e 70%);
  padding: 1rem;
`;

const StyledIcon = styled(FaArrowLeft)`
  margin: 1rem;
`;

const CityDetails = () => {
  const { cityName } = useParams<any>();
  const name = cityName.split('-').join(' ');
  const dispatch = useDispatch();

  const cityDetails = useSelector((state: RootState) => state.cityDetails);
  const [showLoader, setShowLoader] = useState(true);

  const {
    current: { temp, weather },
    hourly,
    daily,
    isLoading,
  } = cityDetails;

  const { icon } = weather[0];

  useEffect(() => {
    if (cityCoords[name]) {
      const { lat, lon } = cityCoords[name];
      dispatch(fetchCity(lat, lon));
    }
  }, []);

  useEffect(() => {
    setShowLoader(isLoading);
  }, [isLoading]);

  if (!cityCoords[name]) return <div>City not found.</div>;
  return (
    <>
      <StyledLink to="/">
        <StyledIcon size={30} />
      </StyledLink>
      <Wrapper>
        <CenteredHeader>{name.toUpperCase()}</CenteredHeader>
        {!showLoader ? (
          <FlexWrapper flexDirection="column" alignItems="center">
            <MainDetails temp={temp} icon={icon} />
            <HourlyDetails hourly={hourly.slice(0, 24)} />
            <DailyDetails daily={daily} />
          </FlexWrapper>
        ) : (
          <CenteredHeader>
            <RiLoader2Fill />
          </CenteredHeader>
        )}
      </Wrapper>
    </>
  );
};

export default CityDetails;
