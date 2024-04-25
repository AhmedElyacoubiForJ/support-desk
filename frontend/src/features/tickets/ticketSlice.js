import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ticketService from "./ticketService";

// initialstate
const initialState = {
  tickets: [],
  ticket: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// create a slice of tickets
const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    /* builder
      .addCase(getTickets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tickets = action.payload;
      })
      .addCase(getTickets.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(createTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ticket = action.payload;
      }); */
  },
});

export const { reset } = ticketSlice.actions;
export default ticketSlice.reducer;
