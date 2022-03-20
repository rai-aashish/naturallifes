import { configureStore } from "@reduxjs/toolkit";
import appStatusReducer from "./appStatusSlice";
//import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { resourcesApi } from "./apiStore";

export const store = configureStore({
  reducer: {
    appStatus: appStatusReducer,
    [resourcesApi.reducerPath]: resourcesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(resourcesApi.middleware),
});

//necessary for refetch on refocus / reconnect
// setupListeners(store.dispatch)
