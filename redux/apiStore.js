import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//resources api
export const resourcesApi = createApi({
  reducerPath: "resourcesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  tagTypes: ["Resources"],
  endpoints: (builder) => ({
    getAllTrainings: builder.query({
      query: () => `trainings`,
    }),
    getTraining: builder.query({
      query: (slug) => `trainings/${slug}`,
    }),
    getCustomersFeedback: builder.query({
      query: () => `customer-feedback`,
    }),
    getPhotoGallery: builder.query({
      query: () => `photo-gallery`,
    }),
    getRecommendations: builder.query({
      query: () => `recommendations`,
    }),
    reserveTraining: builder.mutation({
      query: (data) => ({
        url: `reservation`,
        method: "POST",
        body: data,
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response, meta, arg) => response.data,
    }),
    reserveService: builder.mutation({
      query: (data) => ({
        url: `service-registration`,
        method: "POST",
        body: data,
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response, meta, arg) => response.data,
    }),
  }),
});


