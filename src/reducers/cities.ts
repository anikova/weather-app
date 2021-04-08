import { FetchCitiesTypes } from "../actions/cities";

export const cities = (state = [], { type, payload }: any) => {
	switch (type) {
		case FetchCitiesTypes.SUCCESS: {
			return payload;
		}
	}
	return state;
}