import styles from "./styles.module.css";
import Btn from "components/shared/Btn";
import { useParams } from "react-router";
import VacancyForm from "components/modules/VacancyForm";

const BtnReturn = () => (
  <Btn
    text="К списку вакансий"
    type="link"
    to="/"
    className={styles.home__return}
  />
);

const EditVacancy = () => {
  const data: { id: string } = useParams();

  return (
    <>
      <section className={styles.home__header}>
        <h1>Редактировать вакансию</h1>
        <BtnReturn />
      </section>
      <VacancyForm id={data.id} />
    </>
  );
};

export default EditVacancy;
