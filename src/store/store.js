import { configureStore } from "@reduxjs/toolkit";
import { getProductReducer } from "./Slices/slice";

let datastore = configureStore({
  reducer: {
    getProductReducer: getProductReducer,
  },
});
export default datastore;
