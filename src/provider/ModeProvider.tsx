import { ThemeProvider, CacheProvider } from "@emotion/react";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { useSetting } from "./SettingProvider";
import { registerTheme, registerThemeMui } from "@/plugin/theme";
import { CssBaseline } from "@mui/material";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const ModeContext = createContext(null);

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const cacheLtr = createCache({
  key: "muiltr",
});

export const ModeProvider = ({ children }: PropsWithChildren) => {
  const { mode, lang } = useSetting();
  const [muitheme, setMuitheme] = useState(
    registerThemeMui(mode.value, lang.value === "en" ? "ltr" : "rtl")
  );

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
  useEffect(() => {
    setMuitheme(
      registerThemeMui(mode.value, lang.value === "en" ? "ltr" : "rtl")
    );
  }, [lang.value, mode.value]);

  return (
    <CacheProvider value={lang.value === "fa" ? cacheRtl : cacheLtr}>
      <ThemeProvider theme={muitheme}>
        <ModeContext.Provider value={null}>{children}</ModeContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
};
