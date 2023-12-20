import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "userStore",
  initialState: {
    value: "Hello World",
    user:[],
    loading:false,
  },
  reducers: {
    login: (state,action) => {
      state.value = "สวัสดี";
      state.user = action.payload
      state.loading = true
    },

    logout: (state) => {
      state.value = "ลาก่อน";
      state.loading = false
    },
    
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;