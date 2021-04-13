import { createReducer } from "@reduxjs/toolkit";
import { setVacanciesAction } from "../actionTypes";
import { VacancyInterface } from "lib/interfaces";

type StateInterface = ReadonlyArray<VacancyInterface>;

const initialState: StateInterface = [];

const vacanciesReducer = createReducer(initialState, (builder) => {
  builder.addCase(setVacanciesAction, (state, action) => {
    return action.payload;
  });
});

export default vacanciesReducer;
