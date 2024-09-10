import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: { isOpen: false },
  reducers: {
    setDashboardStatus: (state, action) => {
      state.isOpen = action.payload;
    },
    toggleDashboardStatus: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setDashboardStatus, toggleDashboardStatus } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
export const currentDashboardStatus = (state: RootState) =>
  state.dashboard.isOpen;
