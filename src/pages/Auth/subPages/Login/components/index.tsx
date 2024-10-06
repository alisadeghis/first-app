import { Button, TextField } from "@mui/material";

const LoginPage = () => {
  return (
    <div className="tw-flex tw-flex-col tw-h-full tw-items-center">
      <div>login</div>
      <div className="tw-mt-5">
        <TextField label="Enter Your Name" size="small" />
      </div>
      <div className="tw-mt-auto tw-w-full">
        <Button color="primary" variant="contained" fullWidth>
          Submit
        </Button>
      </div>
    </div>
  );
};
export default LoginPage;
