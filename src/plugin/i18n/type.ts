import faLocale from "@/locale/fa";
import enLocale from "@/locale/en";
import { NestedKeys } from "@/types";

export type I18nKeyDTO = NestedKeys<typeof faLocale | typeof enLocale>;
