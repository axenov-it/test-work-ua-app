import { CityInterface, FormFieldInterface } from "lib/interfaces";

export const getFetchFormFields = (fields: any) =>
  fields.reduce((ac: any, item: any) => {
    if (item.name === "price") {
      ac[item.name] = {
        from: item.from,
        to: item.to,
        one: item.one,
      };
      ac["message"] = item.message;
    } else if (item.name === "city") {
      ac[item.name] = item.value.value;
    } else if (item.name && item.value) {
      ac[item.name] = item.value;
    }

    return ac;
  }, {});

export const getNotValidFields = (fields: any) => {
  const result = fields.filter((field: any) => {
    if (field.isRequired && field.value === "") {
      return true;
    }
    return false;
  });

  return result;
};

export const getFields = (
  vacancy: any,
  defaultFields: ReadonlyArray<FormFieldInterface>,
  city?: CityInterface
) => {
  if (!vacancy) {
    return defaultFields;
  }

  return defaultFields.map((field: FormFieldInterface) => {
    if (!field || !field.name) return field;

    if (field.name === "city" && city) {
      return { ...field, value: { value: city.id, label: city.name } };
    }

    if (field.name === "price" && vacancy.price.from && vacancy.price.to) {
      return {
        ...field,
        from: vacancy.price.from,
        to: vacancy.price.to,
        message: vacancy.message,
      };
    }

    if (field.name === "price" && vacancy.price) {
      return { ...field, one: vacancy.price, message: vacancy.message };
    }

    if (field.value !== undefined) {
      return { ...field, value: vacancy[field.name] };
    }
    return field;
  });
};
