import React from 'react';
import { useSelector } from 'react-redux';

const LandingPage = () => {
  const cities = useSelector((state) => state);

  return <div>LandingPage</div>;
};

export default LandingPage;
