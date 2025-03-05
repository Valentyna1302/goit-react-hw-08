import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "./contactsSlice";
import { authReducer } from "./auth/slice";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
// import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
    auth: authReducer,
  },
});
