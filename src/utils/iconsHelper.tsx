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

export const getBackground: Record<string, string> = {
  '01d': 'linear-gradient(150deg, #ffe500bd 0%, #fd746c8c 70%);',
  '01n': 'linear-gradient(150deg, #000000 0%, #0003135e 70%);',
  '02d': 'linear-gradient(150deg, #ffe500bd 0%, #153bff33 70%);',
  '02n': 'linear-gradient(150deg, #000000 0%, #0003135e 70%);',
  '03d': 'linear-gradient(150deg, #6cd5e2 0%, #010b0c2b 70%);',
  '03n': 'linear-gradient(150deg, #000000 0%, #0003134a 70%);',
  '04d': 'linear-gradient(150deg, #00000075 0%, #00031338 70%);',
  '04n': 'linear-gradient(150deg, #000000 0%, #0003134a 70%);',
  '09d': 'linear-gradient(150deg, #00000075 0%, #00031338 70%);',
  '09n': 'linear-gradient(150deg, #000000 0%, #0003135e 70%);',
  '10d': 'linear-gradient(150deg, #ffe500bd 0%, #153bff33 70%);',
  '10n': 'linear-gradient(150deg, #000000 0%, #0003135e 70%);',
  '11d': 'linear-gradient(150deg, #00000075 0%, #00031338 70%);',
  '11n': 'linear-gradient(150deg, #000000 0%, #0003135e 70%);',
  '13d': 'linear-gradient(150deg, #3474b58c 0%, #153bff26 70%);',
  '13n': 'linear-gradient(150deg, #000000e6 0%, #5e75ef7a 70%);',
  '50d': 'linear-gradient(150deg, #f3e7e78c 0%, #7896a5 70%);',
  '50n': 'linear-gradient(150deg, #01141d 0%, #9e9e9e85 70%);',
};

export const getColor = (icon: string) =>
  icon.indexOf('d') === -1 ? 'white' : 'black';
