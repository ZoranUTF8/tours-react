import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { singleTourData } from "./singleTourFunctions";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  tour: null,
};

export const getSingleTour = createAsyncThunk(
  "tour/getSingleTour",
  async (slug, thunkAPI) => {
    return singleTourData(slug, thunkAPI);
  }
);

const singleTourSlice = createSlice({
  name: "singleTour",
  initialState,

  extraReducers: {
    [getSingleTour.pending]: (state) => {
      state.isLoading = true;
    },
    [getSingleTour.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.tour = payload.data.foundDoc;
    },
    [getSingleTour.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default singleTourSlice.reducer;
