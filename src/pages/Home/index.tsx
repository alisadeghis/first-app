import { useApi } from "@/composables/useApi";
import { useSetting } from "@/provider/SettingProvider";
import { formatDate, formatTime, getDayOfWeek } from "@/utils/date";
import { Place } from "@mui/icons-material";
import { useEffect } from "react";
import { homeServices } from "./services";
import { TemperatureChart } from "./components/chart";
import { Forecastday } from "./types";


export const HomePage = () => {
  const {
    data: dailyWeather,
    error: dailyWeatherError,
    execute: getDailyWeather,
    loading: dailyWeatherLoading,
  } = useApi(homeServices.getDailyWeather);
  const { city } = useSetting();

  const formatedData = (data?: Forecastday[]) => {
    if(!data) return []
    return data.map((i) => ({
      name: getDayOfWeek(i.date).slice(0,3),
      temp: i.day.avgtemp_c,
    }));
  };

  useEffect(() => {
    getDailyWeather(city.value);
  }, [city.value]);

  return (
    <>
      {dailyWeatherLoading ? (
        <>...loading</>
      ) : dailyWeatherError ? (
        <>...Ridi</>
      ) : (
        <div className="tw-flex tw-flex-wrap -tw-m-5">
          <div className="tw-w-6/12 tw-p-5">
            <div className="tw-bg-slate-200 tw-h-full tw-shadow-2xl tw-text-blue-950 tw-p-5 tw-rounded-3xl tw-min-h-48">
              <div className="tw-flex tw-justify-between">
                <div className="details tw-w-6/12">
                  <div className="tw-px-3 tw-pb-1 tw-pt-2 tw-rounded-2xl tw-text-sm tw-text-stone-700 tw-bg-slate-300 tw-flex tw-gap-x-1 tw-max-w-[300px] tw-w-max">
                    <Place fontSize="inherit" color="inherit" />
                    {dailyWeather?.location.name}
                  </div>
                  <div className="tw-mt-5">
                    <h4 className="tw-text-2xl tw-font-bold">
                      {getDayOfWeek(dailyWeather?.current.last_updated)}
                    </h4>
                    <div className="tw-flex tw-items-center tw-gap-x-5 tw-text-xs">
                      <span>
                        {formatDate(dailyWeather?.current.last_updated)}
                      </span>
                      <span>
                        {formatTime(dailyWeather?.current.last_updated)}
                      </span>
                    </div>
                  </div>
                  <div className="tw-mt-5">
                    <h4 className="tw-text-3xl tw-font-bold">
                      {dailyWeather?.current.temp_c}&deg;C
                    </h4>
                    <div className="tw-flex tw-items-center tw-gap-x-2 tw-text-xs">
                      <span>High: {dailyWeather?.current.heatindex_c}</span>
                      <span>Low: {dailyWeather?.current.dewpoint_c}</span>
                    </div>
                  </div>
                </div>
                <div className="tw-w-3/12">
                <div className="tw-flex tw-flex-col tw-justify-end tw-h-full">
                  <img width={'400px'} style={{ margin: 'auto' }} src={dailyWeather?.current.condition.icon} alt="" />
                  <h4 className="tw-text-xl">
                    {dailyWeather?.current.condition.text}
                  </h4>
                  <span className="tw-text-sm tw-mt-1 tw-block">
                  Feels Like {dailyWeather?.current.feelslike_c}
                  </span>

                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tw-w-6/12 tw-p-5">
            <div className="tw-bg-slate-200 tw-h-full tw-shadow-2xl tw-p-5 tw-rounded-3xl tw-min-h-48">
              <h4 className="tw-mb-3 tw-font-bold tw-text-lg">
                Average Monthly Temprature
              </h4>
              <TemperatureChart data={formatedData(dailyWeather?.forecast.forecastday)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
