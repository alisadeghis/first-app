import { API_KEY, axiosInstance } from "@/composables/useService";

export const homeServices = {
    getWeather: async (city: string) => await axiosInstance.get(`weather?q=${city},ir&APPID=${API_KEY}`)
}