import { cities } from "@/assets/cities";
import logo from "@/assets/img/logo.png";
import { useI18n } from "@/composables";
import { useAuth } from "@/provider/AuthProvider";
import { useSetting } from "@/provider/SettingProvider";
import { formatDate, formatTime, getDayOfWeek } from "@/utils/date";
import {
  DarkMode,
  DateRange,
  Mail,
  SettingsOutlined,
  WbSunny
} from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  Divider,
  IconButton,
  Menu,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { PropsWithChildren, useState } from "react";
import { Link } from "react-router-dom";

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  const { i18nT } = useI18n();
  const { city, mode, lang } = useSetting();
  const { logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="tw-flex tw-flex-col tw-h-full tw-min-h-screen">
      <header className="tw-bg-surface-50 tw-text-surface-800 tw-shadow-lg tw-py-3">
        <div className="tw-container">
          <div className="tw-flex tw-items-center tw-flex-wrap tw-justify-between">
            <div className="tw-flex tw-items-center tw-gap-x-3">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
              <h2>{i18nT("HEADER.TITLE")}</h2>
            </div>
            <div className="tw-flex tw-items-center tw-gap-x-1 tw-text-surface-800">
              <Autocomplete
                clearIcon={false}
                size="small"
                style={{
                  width: "250px",
                }}
                options={cities.map((i) => i[lang.value])}
                value={city.value}
                onChange={(_, v) => city.set(v ?? "")}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={i18nT("HEADER.LOCATION")}
                    size="small"
                  />
                )}
              />
              <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <SettingsOutlined />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <div className="tw-flex tw-space-y-3 tw-flex-col tw-min-w-[200px] tw-p-3">
                  <div className="">
                    <h6>{i18nT('MODE')}</h6>
                    <ToggleButtonGroup
                      value={mode.value}
                      fullWidth
                      size="small"
                    >
                      <ToggleButton
                        onClick={() => mode.set("light")}
                        value={"light"}
                      >
                        <WbSunny />
                        {i18nT('LIGHT')}
                      </ToggleButton>
                      <ToggleButton
                        onClick={() => mode.set("dark")}
                        value={"dark"}
                      >
                        <DarkMode />
                        {i18nT('DARK')}
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                  <Divider />
                  <div className="">
                    <h6>{i18nT('LANG')}</h6>
                    <ToggleButtonGroup
                      value={lang.value}
                      fullWidth
                      size="small"
                    >
                      <ToggleButton onClick={() => lang.set("fa")} value={"fa"}>
                        Fa
                      </ToggleButton>
                      <ToggleButton onClick={() => lang.set("en")} value={"en"}>
                        En
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                  <Divider />
                  <Button onClick={logout} color="error">
                    {i18nT('LOGOUT')}
                  </Button>
                </div>
              </Menu>
            </div>
          </div>
        </div>
      </header>
      <main className="tw-py-10 tw-grow tw-overflow-auto">
        <div className="tw-container">{children}</div>
      </main>
      <footer className="tw-bg-surface-50 tw-py-5 tw-shadow-2xl tw-mt-2 tw-text-surface-800">
        <div className="tw-container">
          <div className="tw-flex tw-items-center tw-flex-wrap tw-gap-5 tw-justify-between">
            <div className="">
              {i18nT('FOOTER.TITLE')}
            </div>
            <div className="tw-flex tw-items-center tw-gap-x-3">
              <div className="tw-flex tw-items-center tw-gap-x-1">
                <Mail />
                {i18nT('FOOTER.CONTACT')} : info@nadin.ir
              </div>
              <div className="tw-flex tw-items-center tw-gap-x-1">
                <DateRange />
                <span>{getDayOfWeek(new Date().toString())}</span>
                <span>{formatDate(new Date().toString())}</span>
                <span>{formatTime(new Date().toString())}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
