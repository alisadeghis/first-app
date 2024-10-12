import i18next from "i18next";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

export interface SettingContextType {
  lang: {
    value: "fa" | "en";
    set: (lang: "fa" | "en") => void;
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
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const [city, setCity] = useState<string>("tehran");
  const [lang, setlang] = useState(i18next.language as "fa" | "en");

  const changeMode = (mode: 'light' | 'dark') => {
    setMode(mode)
    localStorage.setItem('mode', mode)
  }
  const changeCity = (city: string) => {
    setCity(city)
    localStorage.setItem('city', city)
  }
  const changeLang = (lang: "fa" | "en") => {
    setlang(lang)
    i18next.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }

  useEffect(() => {
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr'
  }, [lang])


  return (
    <SettingContext.Provider
      value={{
        city: {
          value: city,
          set: changeCity,
        },
        lang: {
          value: lang,
          set: changeLang,
        },
        mode: {
          value: mode,
          set: changeMode,
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
