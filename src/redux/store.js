import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsSlice from "./contactsSlice";
import filtersSlice from "./filtersSlice";

const contactsPeristConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const persistContactsReducer = persistReducer(
  contactsPeristConfig,
  contactsSlice
);

export const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
    filters: filtersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
