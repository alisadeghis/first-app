import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../../providers/AuthProviders";
import { Button, TextField } from "@mui/material";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (await login(email)) {
      navigate("/");
    } else {
      alert("Login failed Broo !. Use mmd@email.com or ali@email.com");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="tw-flex tw-flex-col tw-h-full tw-items-center">
        <div>login</div>
        <div className="tw-mt-5">
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Enter Your Email"
            size="small"
          />
        </div>
        <div className="tw-mt-auto tw-w-full">
          <Button color="primary" variant="contained" fullWidth>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
