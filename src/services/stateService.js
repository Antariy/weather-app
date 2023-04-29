import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    showSideBar: false,
    forecastDateTimeSelect: null,
    currentWeather: null,
};

export const setShowSideBar = createAction("setShowSideBar");
export const setForecastDateTimeSelect = createAction("setForecastDateTimeSelect");
export const setCurrentWeather = createAction("setCurrentWeather")
const reducer = createReducer(initialState, {
    [setShowSideBar]: (state, action) => {
        state.showSideBar = action.payload;
    },
    [setForecastDateTimeSelect]: (state, action) => {
        state.forecastDateTimeSelect = action.payload;
    },
    [setCurrentWeather]: (state, action) => {
        state.currentWeather = action.payload;
    }
})

export const store = configureStore({ reducer });
