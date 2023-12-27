import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Statuses from "../Loading";
import axios from "axios";

let INITIAL_STATE = {
  data: [],
  status: Statuses,
};

let fetchdata = createAsyncThunk("fetch/data", async () => {
  let response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  let GetData = response.data.categories;
  return GetData;
});

let products = createSlice({
  name: "GET PRODUCTS",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(fetchdata.pending, (state) => {
      state.status = Statuses.GET_PRODUCTS;
    });
    builder.addCase(fetchdata.fulfilled, (state, action) => {
      state.status = Statuses.PRODUCTS_RECEIVED;
      state.data.push(...action.payload);
    });
    builder.addCase(fetchdata.rejected, (state) => {
      state.status = Statuses.PRODUCTS_FAIL;
    });
  },
});

let { reducer } = products;

export { fetchdata, reducer as getProductReducer };
