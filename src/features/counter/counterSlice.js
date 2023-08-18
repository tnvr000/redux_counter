import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    countUp: (state) => {
      state.count += 1;
    }
  },
})

export const { countUp } = counterSlice.actions
export default counterSlice.reducer;
