import i18next from "i18next";
import { createContext, PropsWithChildren, useContext, useState } from "react";

export interface SettingContextType {
  lang: {
    value: "fa" | "en";
    set: typeof i18next.changeLanguage;
  };
  mode: {
    value: "dark" | "light";
    set: (v: "dark" | "light") => void;
  };
  city: {
    value: string;
    set: (v: string) => void;
  };
}

const SettingContext = createContext<SettingContextType | null>(null);

export const SettingProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<"dark" | "light">("light");
  const [city, setCity] = useState<string>("tehran");
  const lang = i18next.language as "fa" | "en";
  const setLang = i18next.changeLanguage;

  return (
    <SettingContext.Provider
      value={{
        city: {
          value: city,
          set: setCity,
        },
        lang: {
          value: lang,
          set: setLang,
        },
        mode: {
          value: mode,
          set: setMode,
        },
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};

export const useSetting = () => {
  const context = useContext(SettingContext);
  if (!context) {
    throw new Error("No No !");
  }
  return context;
};
