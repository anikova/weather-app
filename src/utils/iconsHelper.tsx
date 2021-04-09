import React from 'react';
import {
  FaMoon,
  FaSun,
  FaCloudSun,
  FaCloudMoon,
  FaCloud,
  FaCloudShowersHeavy,
  FaCloudSunRain,
  FaCloudMoonRain,
  FaSnowflake,
} from 'react-icons/fa';
import { RiMistFill } from 'react-icons/ri';
import { AiFillThunderbolt } from 'react-icons/ai';

export const getIcon: Record<string, any> = {
  '01d': FaSun,
  '01n': FaMoon,
  '02d': FaCloudSun,
  '02n': FaCloudMoon,
  '03d': FaCloud,
  '03n': FaCloud,
  '04d': FaCloud,
  '04n': FaCloud,
  '09d': FaCloudShowersHeavy,
  '09n': FaCloudShowersHeavy,
  '10d': FaCloudSunRain,
  '10n': FaCloudMoonRain,
  '11d': AiFillThunderbolt,
  '11n': AiFillThunderbolt,
  '13d': FaSnowflake,
  '13n': FaSnowflake,
  '50d': RiMistFill,
  '50n': RiMistFill,
};

export const getBackground: Record<string, any> = {
  '01d': { firstColor: '#ffe500bd', secondColor: '#fd746c8c' },
  '01n': { firstColor: '#000000', secondColor: '#0003135e' },
  '02d': { firstColor: '#ffe500bd', secondColor: '#153bff33' },
  '02n': { firstColor: '#000000', secondColor: '#0003135e' },
  '03d': { firstColor: '#6cd5e2', secondColor: '#010b0c2b' },
  '03n': { firstColor: '#000000', secondColor: '#0003134a' },
  '04d': { firstColor: '#00000075', secondColor: '#00031338' },
  '04n': { firstColor: '#000000', secondColor: '#0003134a' },
  '09d': { firstColor: '#00000075', secondColor: '#00031338' },
  '09n': { firstColor: '#000000', secondColor: '#0003135e' },
  '10d': { firstColor: '#ffe500bd', secondColor: '#153bff33' },
  '10n': { firstColor: '#000000', secondColor: '#0003135e' },
  '11d': { firstColor: '#00000075', secondColor: '#00031338' },
  '11n': { firstColor: '#000000', secondColor: '#0003135e' },
  '13d': { firstColor: '#3474b58c', secondColor: '#153bff26' },
  '13n': { firstColor: '#000000e6', secondColor: '#5e75ef7a' },
  '50d': { firstColor: '#f3e7e78c', secondColor: '#7896a5' },
  '50n': { firstColor: '#01141d', secondColor: '#9e9e9e85' },
};

export const getColor = (icon: string) =>
  icon.indexOf('d') === -1 ? 'white' : 'black';
