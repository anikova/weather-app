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

// types
import { DailyDetailsType } from '../../types/CityDetails';

interface Props {
  daily: Array<DailyDetailsType>;
}

interface ChartData {
  dateTime: string;
  temperature: number;
}

const DailyDetails = ({ daily }: Props) => {
  const [data, setData] = useState<Array<ChartData>>([]);

  useEffect(() => {
    const newData = daily.map(
      ({ dt: datetime, temp: { day: temperature } }) => {
        return {
          dateTime: moment.unix(datetime).format('DD/MM'),
          temperature: Math.round(temperature),
        };
      }
    );
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
