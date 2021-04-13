import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchVacanciesAction } from "redux/asyncActions";

import { getItemFromLocalStorage } from "lib/localStorage";
import { getVacancySelector, getCitySelector } from "redux/selectors";
import { getFetchFormFields, getNotValidFields, getFields } from "./helpers";
import {
  FormFieldInterface,
  VacancyInterface,
  CityInterface,
} from "lib/interfaces";

import Form from "./Form";
import Btn from "components/shared/Btn";
import request from "lib/request";
import debounce from "lodash/debounce";
import defaultFields from "./fields";

import styles from "./styles.module.css";

interface PropsInterface {
  id?: string;
}

const VacancyForm = ({ id = "" }: PropsInterface) => {
  const vacancy: VacancyInterface | undefined = useSelector(
    getVacancySelector(id)
  );

  const cityId = vacancy ? vacancy.city : undefined;

  const city: CityInterface | undefined = useSelector(getCitySelector(cityId));

  const [fields, changeFields] = useState(defaultFields);

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    changeFields(getFields(vacancy, defaultFields, city));
  }, [vacancy, city]);

  const [defaultCities] = useState(
    getItemFromLocalStorage("citiesList").map(
      ({ id, name }: CityInterface) => ({
        value: id,
        label: name,
      })
    )
  );

  const filterCities = debounce((inputValue: string, callback: any) => {
    callback(
      defaultCities.filter((i: { label: string }) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  }, 500);

  const getCities = (inputValue: string, callback: any) => {
    filterCities(inputValue, callback);
  };

  const onChangeCity = (data: { value: string; label: string }) => {
    changeFields(
      fields.map((field: FormFieldInterface) =>
        field.name === "city"
          ? { ...field, value: data, isError: false }
          : field
      )
    );
  };

  const onChangeField = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    changeFields(
      fields.map((field: FormFieldInterface) =>
        field.name === name ? { ...field, value, isError: false } : field
      )
    );
  };

  const onChangePrice = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    const newData = fields.map((field: FormFieldInterface) => {
      if (field.type === "price") {
        return { ...field, [name]: value };
      }
      return field;
    });
    changeFields(newData);
  };

  const onCancel = () => {
    changeFields(defaultFields);
  };

  const onCancelField = (data: { name: string; value: string }) => {
    changeFields(
      fields.map((field: FormFieldInterface) => {
        if (
          field.name === "price" &&
          (data.name === "one" || data.name === "from" || data.name === "to")
        ) {
          return { ...field, [data.name]: "" };
        }
        return field.name === data.name ? { ...field, value: "" } : field;
      })
    );
  };

  const onSave = async () => {
    const notValidFields = getNotValidFields(fields);

    if (notValidFields.length) {
      changeFields(
        fields.map((field: FormFieldInterface) => {
          const isField = notValidFields.find(
            (f: FormFieldInterface) => f.name === field.name
          );
          if (isField) {
            return { ...field, isError: true };
          }
          return field;
        })
      );
      return;
    }

    const dataFetch: VacancyInterface = getFetchFormFields(fields);

    console.log(dataFetch);

    const method = vacancy ? "PUT" : "POST";
    const url = vacancy ? `/vacancy/${vacancy.id}` : "/vacancy";

    await request(url, {
      method,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ vacancy: dataFetch }),
    });

    dispatch(fetchVacanciesAction(true));

    history.push({
      pathname: "/",
    });
  };

  return (
    <div className={styles.form}>
      <Form
        fields={fields}
        onCancelField={onCancelField}
        onChangeField={onChangeField}
        getCities={getCities}
        onChangeCity={onChangeCity}
        onChangePrice={onChangePrice}
      />
      <div className={styles.form__btns}>
        <Btn
          onClick={onSave}
          text="Сохранить"
          type="save"
          className={styles.form__save}
        />
        <span onClick={onCancel} className={styles.form__return}>
          Отменить
        </span>
      </div>
    </div>
  );
};

export default VacancyForm;
