import VacanciesList from "components/modules/VacanciesList";

import styles from "./styles.module.css";
import themeStyles from "lib/theme.module.css";
import Btn from "components/shared/Btn";

const BtnCreate = () => (
  <Btn
    text="Создать вакансию"
    type="link"
    to="vacancy/create"
    className={styles.home__create}
  />
);

const Home = () => (
  <>
    <section className={styles.home__header}>
      <h1>Вакансии и отклики</h1>
      <BtnCreate />
    </section>
    <div className={`${themeStyles.page__body} ${styles.home__body}`}>
      <VacanciesList />
    </div>
    <BtnCreate />
  </>
);

export default Home;
