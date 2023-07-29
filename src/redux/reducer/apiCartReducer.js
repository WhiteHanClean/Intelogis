import { createAction, createSlice } from "@reduxjs/toolkit";
import { put } from "redux-saga/effects";
import { getCartApi } from "../api/getCartApi";

export function* getApiCartsSaga(action) {
  const payload = yield getCartApi(action).then(
    (response) => {
      return response.data.waypoints 
    }
  );
  yield put(getApiSuccess(payload));
}

const apiCart = createSlice({
  name: "posts",
  initialState: {
    list: [],
  },
  reducers: {
    getApiSuccess: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const GET_API_CART = "posts/GET_API_CART";
export const getApiCartAction = createAction(GET_API_CART);

export const { getApiSuccess } = apiCart.actions;
export default apiCart.reducer;
