import { initialStateDetails } from "./mockState";

export const cityDetails = (state = initialStateDetails, action: any) => {
	switch (action.type) {
		case 'FETCH_CITY_SUCCESS': {
			return action.payload;
		}
	}
	return state;
}