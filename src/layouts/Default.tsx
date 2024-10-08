import { cities } from "@/assets/cities";
import logo from "@/assets/img/logo.png";
import { useI18n } from "@/composables";
import { AccountBoxOutlined, SettingsOutlined } from "@mui/icons-material";
import { Autocomplete, IconButton, TextField } from "@mui/material";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  const { i18nT } = useI18n();

  return (
    <>
      <header className="tw-bg-blue-50 tw-shadow-lg tw-py-3">
        <div className="tw-container">
          <div className="tw-flex tw-items-center tw-justify-between">
            <div className="tw-flex tw-items-center tw-gap-x-3">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
              <h2>{i18nT("HEADER.TITLE")}</h2>
            </div>
            <div className="tw-flex tw-items-center tw-gap-x-1">
              <Autocomplete
                size="small"
                style={{
                  width: "250px",
                }}
                options={cities}
                getOptionLabel={(option) => option.city}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={i18nT("HEADER.LOCATION")}
                    size="small"
                  />
                )}
              />
              <IconButton>
                <SettingsOutlined />
              </IconButton>
              <Link to="/profile">
                <IconButton>
                  <AccountBoxOutlined />
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="tw-py-10">
        <div className="tw-container">{children}</div>
      </main>
      <footer></footer>
    </>
  );
};
