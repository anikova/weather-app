export interface WeatherType {
	icon: string;
	description: string;
	main: string;
}

export interface CityType {
	weather: Array<WeatherType>;
	main: { temp: number; humidity: number };
	name: string;
	wind: { speed: number},
}