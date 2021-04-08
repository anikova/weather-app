import { FetchCityTypes } from "../actions/cities";

const initialState = {
	current: {
		temp: 0,
		weather: [
			{
				icon: '',
			}
		]
	},
	hourly: [],
	daily: [],
	isLoading: false,
};

export const cityDetails = (state = initialState, action: any) => {
	switch (action.type) {
		case FetchCityTypes.START: {
			return { ...state, isLoading: true };
		}
		case FetchCityTypes.SUCCESS: {
			return { ...action.payload, isLoading: false };
		}
	}
	return state;
}