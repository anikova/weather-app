import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import CityCard from './CityCard';
import FlexWrapper from '../../components/FlexWrapper';
import { CenteredHeader } from '../../components/SharedComponents';

// actions
import { fetchCities } from '../../actions/cities';

// uti;s
import { cityNames } from '../../utils/cityData';

const LandingPage = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state: any) => state.cities);

  useEffect(() => {
    //dispatch(fetchCities(cityNames));
  }, []);

  return (
    <>
      <CenteredHeader>Weather forecast</CenteredHeader>
      <FlexWrapper
        flexWrap="wrap"
        justifyContent="space-evenly"
        margin="3rem 0 4rem 0"
      >
        {cityNames.map((name) => {
          return <CityCard city={cities[name]} key={name} />;
        })}
      </FlexWrapper>
    </>
  );
};

export default LandingPage;
