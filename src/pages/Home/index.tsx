import { useApi } from "@/composables/useApi";
import { homeServices } from "./services";
import { useEffect } from "react";
import { useSetting } from "@/provider/SettingProvider";

export const HomePage = () => {
  const { data, execute, loading } = useApi(homeServices.getWeather);
  const { city } = useSetting()
  
  useEffect(() => {
    execute(city.value);
  }, [city.value]);
  return (
    <>
      {loading ? (
        <>...loading</>
      ) : (
        <div className="tw-flex tw-items-center tw-flex-wrap -tw-m-5">
          <div>{JSON.stringify(data)}</div>
          <div className="tw-w-6/12 tw-p-5">
            <div className="tw-bg-slate-200 tw-shadow-2xl tw-p-5 tw-rounded-3xl tw-min-h-48">
              hi
            </div>
          </div>
          <div className="tw-w-6/12 tw-p-5">
            <div className="tw-bg-slate-200 tw-shadow-2xl tw-p-5 tw-rounded-3xl tw-min-h-48">
              hi
            </div>
          </div>
        </div>
      )}
    </>
  );
};
