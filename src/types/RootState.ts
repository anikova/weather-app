import { CityType } from "./City";
import { CityDetailsType } from "./CityDetails";

export interface RootState {
	cities: Array<CityType>;
	cityDetails: CityDetailsType;
}