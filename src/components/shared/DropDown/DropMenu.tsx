import { FaChevronDown } from "react-icons/fa";
import styles from "./styles.module.css";
import { useRef, useState } from "react";
import useOutSideClick from "lib/useOutSideClick";

interface PropsInterface {
  children: any;
  menuText: string;
}

const DropMenu = ({ menuText, children }: PropsInterface) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef: any = useRef();

  const onClickOpen = () => {
    setIsOpen(!isOpen);
  };

  useOutSideClick({
    onClick: () => setIsOpen(false),
    outSideRefs: [dropdownRef],
    onSubscribe: isOpen,
  });

  const menuClassName = isOpen
    ? `${styles.dropdown__menu} ${styles.dropdown__open}`
    : `${styles.dropdown__menu} ${styles.dropdown__close}`;

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <span onClick={onClickOpen} className={styles.dropdown__text}>
        {menuText} <FaChevronDown className={styles.dropdown__icon} />
      </span>

      <ul className={menuClassName}>{children}</ul>
    </div>
  );
};

export default DropMenu;
