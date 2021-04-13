import { createAction } from "@reduxjs/toolkit";
import { VacancyInterface, CityInterface } from "lib/interfaces";

export const setVacanciesAction = createAction<ReadonlyArray<VacancyInterface>>(
  "vacanciesList/SET_VACANCIES"
);

export const setCitiesAction = createAction<ReadonlyArray<CityInterface>>(
  "citiesList/SET_CITIES"
);
