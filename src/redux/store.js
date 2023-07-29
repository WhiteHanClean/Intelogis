import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import { getApiCartAction, getApiCartsSaga } from "./reducer/apiCartReducer";
import apiCart from "./reducer/apiCartReducer";
const sagaMiddleware = createSagaMiddleware();

function* sagas() {
  yield takeEvery(getApiCartAction, getApiCartsSaga);
}

export const store = configureStore({
  devTools: true,
  reducer: {
    apiCart,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(sagas);
