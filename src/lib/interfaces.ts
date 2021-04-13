export interface VacancyInterface {
  id: string;
  name: string;
  city: number;
  price: any;
  priceComment: string;
  createdAt: number;
  message?: string;
}

export interface CityInterface {
  id: number;
  name: string;
}

export interface FormFieldInterface {
  id: number;
  type: string;
  name?: string;
  value?: any;
  isError?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  errorText?: string;
  text?: string;
  label?: string;
  from?: string;
  to?: string;
  one?: string;
  message?: string;
  rangeTitle?: string;
  oneTitle?: string;
  emptyTitle?: string;
  isRangeError?: boolean;
  isOneError?: boolean;
  placeholderFrom?: string;
  placeholderTo?: string;
  errorRangeText?: string;
  errorOneText?: string;
  messageTitle?: string;
}
