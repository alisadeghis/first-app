import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton, MenuItem, Select } from "@mui/material";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <header className="tw-py-3 tw-bg-stone-100 tw-shadow-xl">
        <div className="tw-container">
          <div className=" tw-flex tw-items-center tw-justify-between">
            <div className="tw-flex tw-items-center tw-gap-x-3">
              <div className="tw-bg-red-100 tw-rounded-full tw-w-14 tw-h-14 tw-flex tw-items-center tw-justify-center">
                Icon
              </div>
              <div className="tw-font-bold">Title</div>
            </div>
            <div className="tw-flex tw-items-center tw-gap-x-3">
                <Select fullWidth>
                    <MenuItem>hi</MenuItem>
                    <MenuItem>by</MenuItem>
                </Select>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
