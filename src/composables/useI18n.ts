import { useTranslation } from "react-i18next";

export const useI18n = <T>() => {
  const { t } = useTranslation();

  const i18nT = (key: T) => {
    return t(key as string);
  };

  return { i18nT };
};
