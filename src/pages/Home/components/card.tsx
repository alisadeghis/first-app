import { getDayOfWeek } from "@/utils/date";
import { Forecastday } from "../types";
import { Divider } from "@mui/material";

export const WeatherCard = ({
  day: { condition, avgtemp_c },
  date,
}: Forecastday) => {
  return (
    <div className="tw-bg-surface-100 tw-items-center tw-justify-center tw-text-primary-800 tw-rounded-2xl tw-p-5 tw-flex tw-flex-col tw-shadow-xl">
      <span>{getDayOfWeek(date)}</span>
      <div className="tw-my-5 tw-w-full">
        <Divider />
      </div>
      <img src={condition.icon} alt="" />
      <h6 className="tw-mt-10">{avgtemp_c}&deg;C</h6>
    </div>
  );
};
