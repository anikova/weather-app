import React from 'react';
import { useSelector } from 'react-redux';

// components
import CityCard from './CityCard';
import FlexWrapper from '../../components/FlexWrapper';
import { CenteredHeader } from '../../components/SharedComponents';

const LandingPage = () => {
  const cities = useSelector((state: any) => state.cities);
  const cityNames = ['paris', 'london', 'london', 'london', 'london'];

  return (
    <>
      <CenteredHeader>Weather forecast</CenteredHeader>
      <FlexWrapper
        flexWrap="wrap"
        justifyContent="space-evenly"
        margin="3rem 0 4rem 0"
      >
        {cityNames.map((name) => {
          return <CityCard city={cities[name]} />;
        })}
      </FlexWrapper>
    </>
  );
};

export default LandingPage;
