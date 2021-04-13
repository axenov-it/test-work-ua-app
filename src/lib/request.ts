const request = (
  url: string,
  params?: {
    [key: string]: any;
  }
) =>
  fetch(`${process.env.REACT_APP_BASE_URL as string}${url}`, params)
    .then((response) => response.json())
    .catch(() => {
      //alert("connection error !");
    });

export default request;
