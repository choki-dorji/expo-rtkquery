import { configureStore } from "@reduxjs/toolkit";
import { useGetProductsQuery } from "../Dashboard/Dashboard.slice";
import { dashboardSlice } from "../Dashboard/Dashboard.slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
       [dashboardSlice.reducerPath] : dashboardSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware()
    .concat(dashboardSlice.middleware)
 
})

export default store;
