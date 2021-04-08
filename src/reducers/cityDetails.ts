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

export const cityDetails = (state = initialState, { type, payload }: any) => {
	switch (type) {
		case FetchCityTypes.START: {
			return { ...state, isLoading: true };
		}
		case FetchCityTypes.SUCCESS: {
			return { ...payload, isLoading: false };
		}
	}
	return state;
}