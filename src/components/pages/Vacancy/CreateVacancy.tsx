import styles from "./styles.module.css";
import Btn from "components/shared/Btn";
import VacancyForm from "components/modules/VacancyForm";
const BtnReturn = () => (
  <Btn
    text="К списку вакансий"
    type="link"
    to="/"
    className={styles.home__return}
  />
);

const CreateVacancy = () => {
  return (
    <>
      <section className={styles.home__header}>
        <h1>Создать вакансию</h1>
        <BtnReturn />
      </section>
      <VacancyForm />
    </>
  );
};

export default CreateVacancy;
