import { CURRENCY } from "config/constants";
import { getItemFromLocalStorage } from "lib/localStorage";
import { CityInterface } from "lib/interfaces";

export const getPrice = (
  price: number | { from: number; to: number }
): string =>
  typeof price === "number"
    ? `${price} ${CURRENCY}`
    : `${price.from} - ${price.to} ${CURRENCY}`;

export const getVacancyAddress = (cityId: number): string => {
  const result = getItemFromLocalStorage("citiesList").find(
    (city: CityInterface) => city.id === cityId
  );
  return result ? result.name : "";
};
