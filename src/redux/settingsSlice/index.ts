import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";

export interface SettingsState {
  themeMode: PaletteMode;
}

const initialState: SettingsState = {
  themeMode: "light",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleTheme: state => {
      state.themeMode = state.themeMode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = settingsSlice.actions;

export default settingsSlice.reducer;
