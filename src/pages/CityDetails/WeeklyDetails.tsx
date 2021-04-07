import React from 'react';
import { LineChart, XAxis, Line, Tooltip, CartesianGrid } from 'recharts';

// components
import { MarginWrapper } from '../../components/SharedComponents';

const WeeklyDetails = () => {
  const data = [
    {
      a: '1',
      temp: '20',
    },
    {
      a: '2',
      temp: '21',
    },
    {
      a: '3',
      temp: '22',
    },
    {
      a: '4',
      temp: '17',
    },
    {
      a: '5',
      temp: '15',
    },
    {
      a: '6',
      temp: '15',
    },
    {
      a: '7',
      temp: '15',
    },
  ];
  return (
    <>
      <MarginWrapper margin="1rem 0 0.5rem 0">In the next 7 days</MarginWrapper>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="a" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="temp" yAxisId={1} />
      </LineChart>
    </>
  );
};

export default WeeklyDetails;
