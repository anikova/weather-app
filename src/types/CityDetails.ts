import { WeatherType } from "./City";

export interface DailyDetailsType {
	dt: number;
	temp: {
		day: number;
	}
}

export interface HourlyDetailsType {
	dt: number;
	temp: number;
	weather: Array<WeatherType>;
}


export interface CityDetailsType {
	current: { temp: number, weather: Array<WeatherType> };
	hourly: Array<HourlyDetailsType>;
	daily: Array<DailyDetailsType>;
	isLoading: boolean;
}