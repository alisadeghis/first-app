import { registerTheme, registerThemeMui } from "@/plugin/theme";
import createCache from "@emotion/cache";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { useSetting } from "./SettingProvider";

const ModeContext = createContext(null);

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const cacheLtr = createCache({
  key: "muiltr",
});

export const ModeProvider = ({ children }: PropsWithChildren) => {
  const { mode, lang, city } = useSetting();
  const [muitheme, setMuitheme] = useState(
    registerThemeMui(mode.value, lang.value === "en" ? "ltr" : "rtl")
  );

  useEffect(() => {
    const modeLocalStorage = localStorage.getItem("mode") as
      | "light"
      | "dark"
      | undefined;
    mode.set(modeLocalStorage ?? mode.value);

    
    const cityLocalStorage = localStorage.getItem("city") as string
    city.set(cityLocalStorage ?? city.value);
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
