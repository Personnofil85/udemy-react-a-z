import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 100,
  interbalID: undefined,
};

export const chrono = createSlice({
  name: "chrono",
  initialState,
  reducers: {
    tick: (state) => {
      state.value--;
    },
    reset: (state) => {
      state.value = 100;
      state.intervalID && window.clearInterval(state.intervalID);
      state.intervalID = undefined;
    },
    setUpID: (state, action) => {
      state.intervalID = action.payload;
    },
  },
});

export function startChrono() {
  return function (dispatch, getState) {
    if (getState().chrono.intervalID) return;

    // setInterval() du DOM js retourne l'ID de cet interval
    const intervalID = setInterval(() => {
      dispatch(tick());
    }, 1000);
    dispatch(tick());
    dispatch(setUpID(intervalID));
  };
}

export const { tick, reset, setUpID } = chrono.actions;
export default chrono.reducer;
