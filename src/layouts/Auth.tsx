import { Autocomplete, TextField } from "@mui/material";
import { PropsWithChildren } from "react";

import moon_cloud_rain from "@/assets/img/moon-cloud-rain.png";
import moon_cloud_wind from "@/assets/img/moon-cloud-wind.png";
import sun_cloud_rain from "@/assets/img/sun-cloud-rain.png";
import { useSetting } from "@/provider/SettingProvider";
import { useI18n } from "@/composables";

export const AuthLayout = ({ children }: PropsWithChildren) => {
  const { lang } = useSetting();
  const options = ["fa", "en"];
  const { i18nT } = useI18n()
  return (
    <div>
      <div className="tw-flex tw-w-9/12 tw-min-h-[400px] tw-mx-auto tw-bg-surface-50 tw-shadow-2xl tw-mt-20 tw-rounded-lg tw-overflow-hidden">
        <div className="tw-w-full tw-bg-surface-50">
          <div className="tw-w-full tw-h-full tw-p-5">{children}</div>
        </div>
        <div className="tw-w-full tw-hidden md:tw-block tw-bg-surface-100">
          <div className="tw-w-10/12 tw-mx-auto tw-h-full tw-px-7 tw-py-10">
            <div className="tw-flex tw-justify-end">
              <img
                src={moon_cloud_rain}
                alt=""
                style={{
                  filter: "drop-shadow(rgb(0, 0, 0, 0.6) 0px 34px 25px)",
                }}
              />
            </div>
            <div className="tw-flex tw-justify-start -tw-mt-20 -tw-mb-20">
              <img
                src={moon_cloud_wind}
                alt=""
                style={{
                  filter: "drop-shadow(rgb(0, 0, 0, 0.6) 0px 34px 25px)",
                }}
              />
            </div>
            <div className="tw-flex tw-justify-end">
              <img
                src={sun_cloud_rain}
                alt=""
                style={{
                  filter: "drop-shadow(rgb(0, 0, 0, 0.6) 0px 34px 25px)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="tw-flex tw-mt-5 tw-items-center tw-justify-center">
        <Autocomplete
          options={options}
          value={lang.value}
          clearIcon={false}
          onChange={(_, v) => lang.set(v as "fa" | "en")}
          renderInput={(params) => (
            <TextField
              {...params}
              label={i18nT('LANG')}
              variant="standard"
              style={{ width: "200px" }}
            />
          )}
        />
      </div>
    </div>
  );
};
