import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleTheme } from "@/redux/settingsSlice";
import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useCallback } from "react";

export const MUIContext = createContext({
  toggleColorMode: () => {
    /* just for eslint */
  },
});

export default function MuiProvider({ children }: { children: React.ReactNode }) {
  const mode = useAppSelector(store => store.settings.themeMode);
  const dispatch = useAppDispatch();

  const toggleColorMode = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <MUIContext.Provider
      value={{
        toggleColorMode,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MUIContext.Provider>
  );
}
