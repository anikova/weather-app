
const API_KEY = 'c0b58cef40398aa337d430489640ad58';

export enum FetchCitiesTypes {
	START = 'FETCH_CITY_START',
	SUCCESS = 'FETCH_CITY_SUCCESS',
}
export const fetchCities = (cityNames: Array<string>) => async (dispatch: any) => {
	dispatch({ type: FetchCitiesTypes.START })
	Promise.all(cityNames.map(city => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`).then(res => res.json()))).then(response => {
		dispatch({ type: FetchCitiesTypes.START, payload: response})
	});
}

export enum FetchCityTypes {
	START = 'FETCH_CITY_START',
	SUCCESS = 'FETCH_CITY_SUCCESS',
}
export const fetchCity = (lat: number, lon: number) => async (dispatch: any) => {
	dispatch({ type: FetchCityTypes.START })
	fetch(`https://api.openweathermap.org/data/2.5/onecall?lon=${lon}&lat=${lat}&units=metric&appid=${API_KEY}`).then(res => res.json()).then(response => {
		dispatch({ type: FetchCityTypes.SUCCESS, payload: response})
	})
}