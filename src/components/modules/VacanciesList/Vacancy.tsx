import { VacancyInterface } from "lib/interfaces";
import { DropItem, DropMenu } from "components/shared/DropDown";
import { getPrice, getVacancyAddress } from "lib/helpers";
import styles from "./styles.module.css";

interface PropsInterface {
  data: VacancyInterface;
  onClickDelete: (params: { e: any; onClickBtnData: { id: string } }) => void;
}

const Vacancy = ({
  data: { id, name, city, price, priceComment },
  onClickDelete,
}: PropsInterface) => (
  <section className={styles.vacancy}>
    <h2 className={styles.vacancy__name}>{name}</h2>
    <p className={styles.vacancy__price}>
      {getPrice(price)}
      <span className={styles.vacancy__paid}>{priceComment}</span>
    </p>
    <div className={styles.vacancy__footer}>
      <div className={styles.vacancy__city}>{getVacancyAddress(city)}</div>
      <div className={styles.vacancy__menu}>
        <DropMenu menuText="Еще">
          <DropItem type="link" to={`/vacancy/edit/${id}`}>
            Редактировать
          </DropItem>
          <DropItem
            type="btn"
            onClickBtn={onClickDelete}
            onClickBtnData={{ id }}
          >
            Удалить
          </DropItem>
        </DropMenu>
      </div>
    </div>
  </section>
);

export default Vacancy;
