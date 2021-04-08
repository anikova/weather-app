
const API_KEY = 'c0b58cef40398aa337d430489640ad58';

export const fetchCities = (cityNames: Array<string>) => async (dispatch: any) => {
	Promise.all(cityNames.map(city => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`).then(res => res.json()))).then(response => {
		const resultObj: any = {};
		response.forEach(x => {
			resultObj[x.name.toLowerCase()] = x;
		})
		dispatch({ type: 'FETCH_CITIES_SUCCESS', payload: resultObj})
	});
}
export const fetchCity = (lat: number, lon: number) => async (dispatch: any) => {
	fetch(`https://api.openweathermap.org/data/2.5/onecall?lon=${lon}&lat=${lat}&units=metric&appid=${API_KEY}`).then(res => res.json()).then(response => {
		dispatch({ type: 'FETCH_CITY_SUCCESS', payload: response})
	})
}