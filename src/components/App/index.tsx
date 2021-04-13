import Router from "config/Router";
import { fetchCitiesAction } from "redux/asyncActions";
import { fetchVacanciesAction } from "redux/asyncActions";
import styles from "./styles.module.css";
import "./global.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCitiesAction());
    dispatch(fetchVacanciesAction());
  }, [dispatch]);

  return (
    <div className={styles.page}>
      <Router />
    </div>
  );
}

export default App;
