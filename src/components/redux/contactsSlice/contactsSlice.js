import { createSlice } from "@reduxjs/toolkit";

import initialContacts from "../../../initial-contacts.json"

const INITIAL_STATE = {
  items: initialContacts,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
      deleteContact: (state, action) => {
        //   const elementIndex = state.items.findIndex((item) => item.id === action.payload)
        //   state.items.splice(elementIndex, 1)
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const selectContacts = (state) => state.contacts.items
export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
