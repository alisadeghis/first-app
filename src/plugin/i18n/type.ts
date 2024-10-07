import faLocale from "@/locale/fa.json";
import enLocale from "@/locale/en.json";
import { NestedKeys } from "@/types";

export type I18nKeyDTO = NestedKeys<typeof faLocale | typeof enLocale>;
