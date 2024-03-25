import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface InvoicesState {}

const initialState: InvoicesState = {};

export const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
});

export const {} = invoicesSlice.actions;
export default invoicesSlice.reducer;
