import { VacancyInterface, CityInterface } from "lib/interfaces";

type VacanciesInterface = ReadonlyArray<VacancyInterface>;

export const getVacanciesSelector = ({
  vacanciesList,
}: {
  vacanciesList: VacanciesInterface;
}) => vacanciesList;

export const getVacancySelector = (id: string) => ({
  vacanciesList,
}: {
  vacanciesList: VacanciesInterface;
}) => vacanciesList.find((vacancy) => vacancy.id === id);

type CitiesInterface = ReadonlyArray<CityInterface>;

export const getCitySelector = (id?: number) => ({
  citiesList,
}: {
  citiesList: CitiesInterface;
}) =>
  id ? citiesList.find((city: CityInterface) => city.id === id) : undefined;

export const getCitiesSelector = ({
  citiesList,
}: {
  citiesList: CitiesInterface;
}) => citiesList;
