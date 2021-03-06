# Weather app

## Overview

This is a React application that uses the Open Weather API to display the current weather details for 5 cities.

## Features
* Based on previously defined cities in the config (city name, longitute and latitude), the details are fetched from the API
* Each city is displayed in a card, with appropriate icon and backgroud, based on the current weather and time
* By clicking on the card, the details for the city are displayed - current weather, hourly and daily details

## Project structure
* pages - each route has a separate folder, with the main container and the components used in that container
* components - shared components between the pages
* actions and reducers - redux logic
* types - Typescript interfaces
* utils - configuration for the cities, background and icons

## Running the project
To view this application, you can visit this [link](https://anikova.github.io/weather-app) for a demo version or you can run the following commands in the terminal and open [http://localhost:3000](http://localhost:3000) in the browser.

### `yarn install`

### `yarn start`

## Packages used
* create-react-app (with template Typescript)
* redux
* styled-components
* recharts
* react-router-dom


