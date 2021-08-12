import {
  CityInterface,
  OptionsInterface,
} from "../containers/PlanMyTrip/PlanMyTrip";
import { TourismService } from "../services/TourismService";

/**
 * Helper function to fetch all the tourist spots of a particular destination.
 * @param cityCode
 */
export const fetchTouristSpots: (cityCode: string) => Promise<[]> = async (
  cityCode
) => {
  try {
    const { data } = await TourismService.getTouristSpots(cityCode);
    return data;
  } catch (err) {
    return [];
  }
};

export const processCities = (data: CityInterface[]) => {
  let processedCities: OptionsInterface[] = [];
  data.forEach((city: CityInterface) => {
    let processedCity = { value: "", label: "" };
    processedCity.value = city.code;
    processedCity.label = city.name;

    processedCities.push(processedCity);
  });

  return processedCities;
};
