import classNames from "classnames";
import Title from "components/shared/Title";
import ErrorText from "components/shared/ErrorText";
import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";

import styles from "./styles.module.css";

interface Props {
  inputClassName?: string;
  inputLabelClassName?: string;
  inputLabelReqiredClassName?: string;
  inputData: {
    type: string;
    name: string;
    label?: string;
    placeholder?: string;
    isRequired?: boolean;
    value?: string;
    isFocus?: boolean;
    isError?: boolean;
    errorText?: string;
  };
  onChange?: (e: any) => void;
  cancel?: (data: any) => void;
}

const Input = ({
  inputData: {
    type,
    name,
    label = "",
    placeholder,
    isRequired = false,
    value = "",
    isFocus,
    isError,
    errorText,
  },
  inputClassName = "",
  inputLabelClassName = "",
  inputLabelReqiredClassName = "",
  onChange,
  cancel,
}: Props) => {
  const isInputValue = value.length > 0;
  const inputRef: any = useRef();

  useEffect(() => {
    if (isFocus) {
      inputRef.current.focus();
    }
  });

  return (
    <div className={styles.input}>
      <Title
        text={label}
        isRequired={isRequired}
        classTitleName={inputLabelClassName}
        classRequiredName={inputLabelReqiredClassName}
      />
      <div className={styles.input__elementWrap}>
        <input
          ref={inputRef}
          name={name}
          type={type}
          onChange={onChange}
          className={classNames(styles.input__element, {
            [inputClassName]: !!inputClassName,
          })}
          placeholder={placeholder}
          value={value}
        />
        {isInputValue && (
          <FaTimes
            onClick={() => cancel && cancel({ name, value })}
            className={styles.input__times}
          />
        )}
      </div>
      <ErrorText isError={isError} errorText={errorText} />
    </div>
  );
};

export default Input;
