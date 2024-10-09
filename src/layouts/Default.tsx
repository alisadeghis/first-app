import { cities } from "@/assets/cities";
import logo from "@/assets/img/logo.png";
import { useI18n } from "@/composables";
import { useSetting } from "@/provider/SettingProvider";
import { AccountBoxOutlined, DarkMode, Light, SettingsOutlined, WbSunny } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  ButtonGroup,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { PropsWithChildren, useState } from "react";
import { Link } from "react-router-dom";

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  const { i18nT } = useI18n();
  const { city, mode } = useSetting();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header className="tw-bg-surface-50 tw-text-surface-800 tw-shadow-lg tw-py-3">
        <div className="tw-container">
          <div className="tw-flex tw-items-center tw-justify-between">
            <div className="tw-flex tw-items-center tw-gap-x-3">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
              <h2>{i18nT("HEADER.TITLE")}</h2>
            </div>
            <div className="tw-flex tw-items-center tw-gap-x-1 tw-text-surface-800">
              <Autocomplete
                size="small"
                style={{
                  width: "250px",
                }}
                options={cities.map((i) => i.city)}
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
                <div className="tw-flex tw-flex-col tw-min-w-[200px] tw-p-3">
                  <div className="">
                    <h6>Mode</h6>
                    <ToggleButtonGroup value={mode.value} fullWidth size="small">
                      <ToggleButton onClick={() => mode.set('light')} value={'light'}>
                        <WbSunny />
                        Light
                      </ToggleButton>
                      <ToggleButton onClick={() => mode.set('dark')} value={'dark'}>
                        <DarkMode/>
                        Dark
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                </div>
              </Menu>
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
