import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { typeproducts } from "../../types";


export const dashboardSlice = createApi({
    reducerPath: "dashboard/slice",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
    tagTypes: ['', "prescription"],

    endpoints: (builder) => ({
        getProducts: builder.query<typeproducts[], void>({
          query: () => "products",
        }),
        getProductById : builder.query<typeproducts, void>({
          query: (id) => `products/${id}`,
        })
    })
})

export const { useGetProductsQuery, useGetProductByIdQuery } = dashboardSlice;