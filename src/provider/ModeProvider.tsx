import { ThemeProvider } from "@emotion/react";
import { createContext, PropsWithChildren, useEffect } from "react";
import { useSetting } from "./SettingProvider";
import { registerTheme, registerThemeMui } from "@/plugin/theme";

const ModeContext = createContext(null);

export const ModeProvider = ({ children }: PropsWithChildren) => {
  const { mode } = useSetting();

  useEffect(() => {
    const modeLocalStorage = localStorage.getItem("mode") as
      | "light"
      | "dark"
      | undefined;
    mode.set(modeLocalStorage ?? mode.value);
  }, []);

  useEffect(() => {
    registerTheme(mode.value);
  }, [mode.value]);
  return (
    <ThemeProvider theme={registerThemeMui(mode.value)}>
      <ModeContext.Provider value={null}>{children}</ModeContext.Provider>
    </ThemeProvider>
  );
};
