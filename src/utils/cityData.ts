// for each city in the cityNames array, the lat and lon must be provided in order to make the API call for the city details.
export const cityCoords: Record<string, { lat: number, lon: number }> = {
	paris: { lat: 48.8534, lon: 2.3488 },
	london: { lat: 51.5085, lon: -0.1257 },
	madrid: { lat: 40.4165, lon: -3.7026 },
	amsterdam: { lat: 52.374 , lon: 4.8897 },
	skopje: { lat: 42 , lon: 21.4333 },
}

// the names of the cities that need to be displayed
export const cityNames = ['paris', 'london', 'madrid', 'amsterdam', 'skopje'];