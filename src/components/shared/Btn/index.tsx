import { Link } from "react-router-dom";
import themeStyles from "lib/theme.module.css";
import styles from "./styles.module.css";

interface PropsInterface {
  text: string;
  type: string;
  to?: string;
  className?: string;
  onClick?: () => void;
}

const Btn = ({ text, type, className, to = "/", onClick }: PropsInterface) => {
  const defaultClases = `${themeStyles[`btn__${type}`]} ${styles.btn}`;

  const classNameBtn = className
    ? `${defaultClases} ${className}`
    : `${defaultClases}`;

  switch (type) {
    case "link":
      return (
        <Link className={classNameBtn} to={to}>
          {text}
        </Link>
      );

    case "save":
      return (
        <button onClick={onClick} className={classNameBtn}>
          {text}
        </button>
      );

    default:
      return (
        <button onClick={onClick} className={className}>
          {text}
        </button>
      );
  }
};

export default Btn;
