import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  LineChart,
  XAxis,
  Line,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

// components
import { MarginWrapper } from '../../components/SharedComponents';

const DailyDetails = ({ daily }: any) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const newData = daily.map((x: any) => {
      return {
        dateTime: moment.unix(x.dt).format('DD/MM'),
        temperature: Math.round(x.temp.day),
      };
    });
    setData(newData);
  }, [daily]);

  return (
    <>
      <MarginWrapper margin="1rem 0 0.5rem 0">In the next 7 days</MarginWrapper>
      <ResponsiveContainer width="80%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="dateTime" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="temperature" yAxisId={1} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default DailyDetails;
