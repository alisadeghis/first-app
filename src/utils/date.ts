import { format } from "date-fns";
import { format as formatJalali } from "date-fns-jalali";
import { enUS } from "date-fns/locale";
import { faIR } from "date-fns-jalali/locale";
import i18next from "i18next";

function getCurrentLanguage(): string {
  return i18next.language ?? "en"; 
}

export function getDayOfWeek(dateString?: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);

  if (getCurrentLanguage() === "fa") {
    return formatJalali(date, "EEEE", { locale: faIR });
  } else {
    return format(date, "EEEE", { locale: enUS });
  }
}

export function formatDate(dateString?: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);

  if (getCurrentLanguage() === "fa") {
    return formatJalali(date, "d MMMM yyyy", { locale: faIR });
  } else {
    return format(date, "d MMM, yyyy", { locale: enUS });
  }
}

export function formatTime(dateString?: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);

  if (getCurrentLanguage() === "fa") {
    return formatJalali(date, "HH:mm", { locale: faIR });
  } else {
    return format(date, "h:mm a", { locale: enUS });
  }
}

export function formatDateTime(dateString?: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);

  if (getCurrentLanguage() === "fa") {
    return formatJalali(date, "EEEE، d MMMM yyyy ساعت HH:mm", { locale: faIR });
  } else {
    return format(date, "EEEE, d MMM yyyy, h:mm a", { locale: enUS });
  }
}
