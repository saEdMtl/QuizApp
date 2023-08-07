import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import questionsReducer from "../features/questions/questionsSlice";

import logger from "redux-logger"

const store = configureStore({
    reducer: { questions: questionsReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;