import { Switch, Route } from "react-router-dom";
import Home from "components/pages/Home";
import CreateVacancy from "components/pages/Vacancy/CreateVacancy";
import EditVacancy from "components/pages/Vacancy/EditVacancy";

const Router = () => (
  <Switch>
    <Route path="/vacancy/create">
      <CreateVacancy />
    </Route>
    <Route path="/vacancy/edit/:id">
      <EditVacancy />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default Router;
