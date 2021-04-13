import { createReducer } from "@reduxjs/toolkit";
import { setCitiesAction } from "../actionTypes";
import { CityInterface } from "lib/interfaces";

type StateInterface = ReadonlyArray<CityInterface>;

const initialState: StateInterface = [];

const citiesReducer = createReducer(initialState, (builder) => {
  builder.addCase(setCitiesAction, (state, action) => {
    return action.payload;
  });
});

export default citiesReducer;
