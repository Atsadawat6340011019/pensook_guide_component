import { createSlice } from "@reduxjs/toolkit";

export const itSlice = createSlice({
  name: "itStore",
  initialState: {
    value: "itStore",
    user: [],
    loading: false,
  },
  reducers: {},
});



export default itSlice.reducer;
