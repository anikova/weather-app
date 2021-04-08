import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiLoader2Fill } from 'react-icons/ri';

// components
import CityCard from './CityCard';
import FlexWrapper from '../../components/FlexWrapper';
import { CenteredHeader } from '../../components/SharedComponents';

// actions
import { fetchCities } from '../../actions/cities';

// uti;s
import { cityNames } from '../../utils/cityData';

// types
import { RootState } from '../../types/RootState';

const LandingPage = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state: RootState) => state.cities);

  useEffect(() => {
    dispatch(fetchCities(cityNames));
  }, []);

  return (
    <>
      <CenteredHeader>Weather forecast</CenteredHeader>
      {cities.length !== 0 ? (
        <FlexWrapper
          flexWrap="wrap"
          justifyContent="space-evenly"
          margin="3rem 0 4rem 0"
        >
          {cities.map((city) => {
            return <CityCard city={city} key={city.name} />;
          })}
        </FlexWrapper>
      ) : (
        <CenteredHeader>
          <RiLoader2Fill />
        </CenteredHeader>
      )}
    </>
  );
};

export default LandingPage;
