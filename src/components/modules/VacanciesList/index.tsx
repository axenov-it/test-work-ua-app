import { useSelector, useDispatch } from "react-redux";
import { fetchVacanciesAction } from "redux/asyncActions";
import request from "lib/request";

import { getVacanciesSelector } from "redux/selectors";
import { VacancyInterface } from "lib/interfaces";

import Vacancy from "./Vacancy";

const VacanciesList = () => {
  const vacancies = useSelector(getVacanciesSelector);
  const dispatch = useDispatch();

  const onClickDelete = async (params: {
    e: any;
    onClickBtnData: { id: string };
  }) => {
    await request(`/vacancy/${params.onClickBtnData.id}`, { method: "DELETE" });
    dispatch(fetchVacanciesAction(true));
  };

  return (
    <>
      {vacancies.map((vacancy: VacancyInterface) => (
        <Vacancy
          key={vacancy.id}
          data={vacancy}
          onClickDelete={onClickDelete}
        />
      ))}
    </>
  );
};

export default VacanciesList;
