import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import itSlice from "./itSlice";



export default configureStore({
  reducer: {
    userBoat:userSlice,
    itBoat:itSlice,

  },
});