import { Link } from "react-router-dom";
import styles from "./styles.module.css";

interface PropsInterface {
  children: string;
  onClickBtn?: (params: { e: any; onClickBtnData: any }) => void;
  onClickBtnData?: any;
  type: string;
  to?: string;
}

const DropItem = ({
  children,
  onClickBtn,
  onClickBtnData,
  type,
  to = "",
}: PropsInterface) => {
  switch (type) {
    case "link":
      return (
        <li className={styles.dropdown__item}>
          <Link className={styles.dropdown__btn} to={to}>
            {children}
          </Link>
        </li>
      );

    default:
      return (
        <li className={styles.dropdown__item}>
          <span
            className={styles.dropdown__btn}
            onClick={(e: any) =>
              onClickBtn && onClickBtn({ e, onClickBtnData })
            }
          >
            {children}
          </span>
        </li>
      );
  }
};

export default DropItem;
