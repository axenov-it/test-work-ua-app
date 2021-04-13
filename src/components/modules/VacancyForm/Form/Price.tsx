import Input from "components/shared/Input";
import Radio from "./Radio";
import styles from "../styles.module.css";
import { useState } from "react";

const Price = ({
  inputData: { one, from, to, message },
  onChangePrice,
  onCancelField,
}: any) => {
  const [active, setActive] = useState({
    range: true,
    one: false,
    none: false,
  });

  const onChangeActive = (type: string) => {
    setActive(
      Object.keys(active).reduce((ac: any, key: any) => {
        ac[key] = key === type;
        return ac;
      }, {})
    );
  };

  return (
    <>
      <div className={styles.form_radioBlock}>
        <Radio
          className={styles.form__radio}
          iconClassName={styles.form__radioIcon}
          iconActiveClassName={styles.form__radioIconActive}
          onClick={() => onChangeActive("range")}
          isActive={active.range}
        >
          Диапазон
        </Radio>

        {active.range ? (
          <div className={styles.form__range}>
            <Input
              onChange={onChangePrice}
              cancel={onCancelField}
              inputData={{
                type: "number",
                name: "from",
                placeholder: "От",
                value: from,
              }}
            />
            --
            <Input
              onChange={onChangePrice}
              cancel={onCancelField}
              inputData={{
                type: "number",
                name: "to",
                placeholder: "До",
                value: to,
              }}
            />
          </div>
        ) : null}
      </div>
      <div className={styles.form_radioBlock}>
        <Radio
          className={styles.form__radio}
          iconClassName={styles.form__radioIcon}
          iconActiveClassName={styles.form__radioIconActive}
          onClick={() => onChangeActive("one")}
          isActive={active.one}
        >
          Одно значение
        </Radio>

        {active.one ? (
          <Input
            onChange={onChangePrice}
            cancel={onCancelField}
            inputData={{
              type: "number",
              name: "one",
              placeholder: "Одно значение",
              value: one,
            }}
          />
        ) : null}
      </div>

      <Radio
        className={styles.form__radio}
        iconClassName={styles.form__radioIcon}
        iconActiveClassName={styles.form__radioIconActive}
        onClick={() => onChangeActive("none")}
        isActive={active.none}
      >
        Не указывать <i>(не некомендуется)</i>
      </Radio>

      <p>Комментарий к зарплате</p>
      <textarea name="message" onChange={onChangePrice} value={message} />
    </>
  );
};

export default Price;
