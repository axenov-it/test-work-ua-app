import request from "lib/request";
import { setVacanciesAction, setCitiesAction } from "./actionTypes";
import {
  hasItemInLocalStorage,
  setItemToLocalStorage,
  getItemFromLocalStorage,
} from "lib/localStorage";
import { API } from "config/constants";

export const fetchVacanciesAction = (isUpgrade: boolean = false) => async (
  dispatch: any
) => {
  const isVacancies = hasItemInLocalStorage("vacanciesList");

  const result =
    !isVacancies || isUpgrade
      ? await request(API.VACANCIES)
      : getItemFromLocalStorage("vacanciesList");

  if (result) {
    dispatch(setVacanciesAction(result));
  }

  if (result && (!isVacancies || isUpgrade)) {
    setItemToLocalStorage("vacanciesList", result);
  }
};

export const fetchCitiesAction = () => async (dispatch: any) => {
  const isCities = hasItemInLocalStorage("citiesList");

  const result = !isCities
    ? await request(API.CITIES)
    : getItemFromLocalStorage("citiesList");

  if (result) {
    dispatch(setCitiesAction(result));
  }

  if (result && !isCities) {
    setItemToLocalStorage("citiesList", result);
  }
};
