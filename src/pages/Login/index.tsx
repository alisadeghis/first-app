import { useI18n } from "@/composables";
import { useAuth } from "@/provider/AuthProvider";
import { Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [{ email }, setUserData] = useState<{ email: string }>({
    email: '',
  });
  const { login } = useAuth()
  const navigate = useNavigate();
  
  const onSubmit = async (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    if (await login(email)) {
      navigate("/");
    } else {
      alert("Login failed Broo !. Use mmd@email.com or ali@email.com");
    }
  };
  const { i18nT } = useI18n();
  return (
    <form onSubmit={onSubmit}>
      <div className="tw-flex tw-flex-col tw-items-center">
        <h3 className="tw-font-bold tw-mt-20 tw-text-xl">{i18nT("LOGIN")}</h3>
        <div className="tw-mt-10 tw-w-full tw-px-10">
          <TextField
            defaultValue={email}
            onChange={(e) => setUserData({ email: e.target.value })}
            size="small"
            fullWidth
            label={i18nT("EMAIL_INPUT")}
          />
          <div className="tw-mt-36">
            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
