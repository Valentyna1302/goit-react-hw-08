import { createSelector } from "@reduxjs/toolkit";
import { selectStatusFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectStatusFilter],
  (contacts, filter) => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
