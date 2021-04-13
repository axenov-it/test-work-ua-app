import Input from "components/shared/Input";
import City from "./City";
import Title from "components/shared/Title";
import Price from "./Price";
import styles from "../styles.module.css";

const Form = ({
  fields,
  onChangeField,
  getCities,
  onChangeCity,
  onChangePrice,
  onCancelField,
}: any) =>
  fields.map((field: any) => {
    switch (field.type) {
      case "text":
        return (
          <Input
            key={field.id}
            onChange={onChangeField}
            cancel={onCancelField}
            inputData={field}
            inputLabelReqiredClassName={styles.form__requiredName}
            inputLabelClassName={styles.form__inputLabel}
          />
        );

      case "title":
        return (
          <Title
            key={field.id}
            text={field.text}
            isRequired={field.isRequired}
            classRequiredName={styles.form__requiredName}
          />
        );

      case "city":
        return (
          <City
            key={field.id}
            onCancelField={onCancelField}
            onChangeCity={onChangeCity}
            getCities={getCities}
            inputData={field}
            isRequired={field.isRequired}
          />
        );
      case "price":
        return (
          <Price
            key={field.id}
            onCancelField={onCancelField}
            onChangePrice={onChangePrice}
            inputData={field}
          />
        );

      default:
        return null;
    }
  });

export default Form;
