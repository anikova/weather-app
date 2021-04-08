import { FetchCitiesTypes } from "../actions/cities";

export const cities = (state = [], action: any) => {
	switch (action.type) {
		case FetchCitiesTypes.SUCCESS: {
			return action.payload;
		}
	}
	return state;
}