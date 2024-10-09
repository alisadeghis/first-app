import { API_KEY, axiosInstance } from "@/composables/useService";
import { DailyWeatherResponse } from "./types";

export const homeServices = {
  getWeather: async (city: string) =>
    await axiosInstance.get(`current.json?key=${API_KEY}&q=${city}&aqi=no`),
  getDailyWeather: async (city: string) =>
    await axiosInstance.get<DailyWeatherResponse>(
      `forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`
    ),
};
