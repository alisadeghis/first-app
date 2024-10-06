import { Autocomplete, TextField } from "@mui/material";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  const options = [
    { label: "Fa", id: 1 },
    { label: "En", id: 2 },
  ];
  return (
    <div>
      <div className="tw-flex tw-w-9/12 tw-min-h-[400px] tw-mx-auto tw-bg-white tw-mt-36 tw-rounded-lg tw-overflow-hidden">
        <div className="tw-w-6/12">
          <div className="tw-w-full tw-h-full tw-p-5 tw-flex tw-flex-col tw-items-center tw-justify-center">
            <Outlet />
          </div>
        </div>
        <div className="tw-w-6/12">
          <div className="tw-w-full tw-h-full tw-bg-blue-100"></div>
        </div>
      </div>
      <div className="tw-flex tw-mt-5 tw-items-center tw-justify-center">
        <Autocomplete
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Lang"
              variant="standard"
              style={{ width: "200px" }}
            />
          )}
        />
      </div>
    </div>
  );
};

export default AuthLayout;
