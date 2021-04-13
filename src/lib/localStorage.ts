export const setItemToLocalStorage = (key: string, item: any) =>
  localStorage.setItem(key, JSON.stringify(item));

export const getItemFromLocalStorage = (key: string) =>
  JSON.parse(localStorage.getItem(key) as string);

export const hasItemInLocalStorage = (key: string) =>
  !!(localStorage.getItem(key) as string);

export const removeItemFromLocalStorage = (key: string) =>
  localStorage.removeItem(key);

export const clearLocalStorage = () => localStorage.clear();
