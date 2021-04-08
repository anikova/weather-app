import { initialState } from "./mockState";

export const cities = (state = initialState, action: any) => {
	switch (action.type) {
		case 'FETCH_CITIES_SUCCESS': {
			return action.payload;
		}
	}
	return state;
}