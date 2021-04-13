import AsyncSelect from "react-select/async";
import ErrorText from "components/shared/ErrorText";
import Title from "components/shared/Title";
import styles from "../styles.module.css";

const City = ({
  getCities,
  onChangeCity,
  inputData: { label, isRequired, placeholder, isError, errorText, value },
}: any) => {
  return (
    <>
      <Title
        text={label}
        isRequired={isRequired}
        classTitleName={styles.form__inputLabel}
        classRequiredName={styles.form__requiredName}
      />
      <AsyncSelect
        value={value}
        loadOptions={getCities}
        placeholder={placeholder}
        onChange={onChangeCity}
      />
      <ErrorText isError={isError} errorText={errorText} />
    </>
  );
};

export default City;
