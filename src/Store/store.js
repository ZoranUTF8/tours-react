import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/User/userSlice";
import singleTourSlice from "../features/Tour/singleTourSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    singleTour: singleTourSlice,
  },
});
