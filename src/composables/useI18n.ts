import { I18nKeyDTO } from "@/plugin/i18n/type";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export const useI18n = () => {
  const { t } = useTranslation();
  // const lang = i18next.language;

  const i18nT = (key: I18nKeyDTO) => {
    return t(key as string);
  };

  return { i18nT };
};
