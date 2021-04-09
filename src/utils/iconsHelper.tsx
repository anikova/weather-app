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

export const getIcon = (iconName: string) => {
  switch (iconName) {
    case '01d': {
      return FaSun;
    }
    case '01n': {
      return FaMoon;
    }
    case '02d': {
      return FaCloudSun;
    }
    case '02n': {
      return FaCloudMoon;
    }
    case '03d': {
      return FaCloud;
    }
    case '03n': {
      return FaCloud;
    }
    case '04d': {
      return FaCloud;
    }
    case '04n': {
      return FaCloud;
    }
    case '09d': {
      return FaCloudShowersHeavy;
    }
    case '09n': {
      return FaCloudShowersHeavy;
    }
    case '10d': {
      return FaCloudSunRain;
    }
    case '10n': {
      return FaCloudMoonRain;
    }
    case '11d': {
      return AiFillThunderbolt;
    }
    case '11n': {
      return AiFillThunderbolt;
    }
    case '13d': {
      return FaSnowflake;
    }
    case '13n': {
      return FaSnowflake;
    }
    case '50d': {
      return RiMistFill;
    }
    case '50n': {
      return RiMistFill;
    }
    default: {
      return FaSun;
    }
  }
};

export const getBackground = (iconName: string) => {
  switch (iconName) {
    case '01d': {
      return 'linear-gradient(150deg, #ffe500bd 0%, #fd746c8c 70%);';
    }
    case '01n': {
      return 'linear-gradient(150deg, #000000 0%, #0003135e 70%);';
    }
    case '02d': {
      return 'linear-gradient(150deg, #ffe500bd 0%, #153bff33 70%);';
    }
    case '02n': {
      return 'linear-gradient(150deg, #000000 0%, #0003135e 70%);';
    }
    case '03d': {
      return 'linear-gradient(150deg, #6cd5e2 0%, #010b0c2b 70%);';
    }
    case '03n': {
      return 'linear-gradient(150deg, #000000 0%, #0003134a 70%);';
    }
    case '04d': {
      return 'linear-gradient(150deg, #00000075 0%, #00031338 70%);';
    }
    case '04n': {
      return 'linear-gradient(150deg, #000000 0%, #0003134a 70%);';
    }
    case '09d': {
      return 'linear-gradient(150deg, #00000075 0%, #00031338 70%);';
    }
    case '09n': {
      return 'linear-gradient(150deg, #000000 0%, #0003135e 70%);';
    }
    case '10d': {
      return 'linear-gradient(150deg, #ffe500bd 0%, #153bff33 70%);';
    }
    case '10n': {
      return 'linear-gradient(150deg, #000000 0%, #0003135e 70%);';
    }
    case '11d': {
      return 'linear-gradient(150deg, #00000075 0%, #00031338 70%);';
    }
    case '11n': {
      return 'linear-gradient(150deg, #000000 0%, #0003135e 70%);';
    }
    case '13d': {
      return 'linear-gradient(150deg, #3474b58c 0%, #153bff26 70%);';
    }
    case '13n': {
      return 'linear-gradient(150deg, #000000e6 0%, #5e75ef7a 70%);';
    }
    case '50d': {
      return 'linear-gradient(150deg, #f3e7e78c 0%, #7896a5 70%);';
    }
    case '50n': {
      return 'linear-gradient(150deg, #01141d 0%, #9e9e9e85 70%);';
    }
    default: {
      return 'linear-gradient(150deg, #ffe500bd 0%, #153bff33 70%);';
    }
  }
};

export const getColor = (icon: string) =>
  icon.indexOf('d') === -1 ? 'white' : 'black';
