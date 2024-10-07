import logo from "@/assets/img/logo.png";
import { initI18n } from "@/plugin";
import { Settings } from "@mui/icons-material";
import { Autocomplete, IconButton, TextField } from "@mui/material";
import { useI18n } from "./composables";
import { I18nKeyDTO } from "./plugin/i18n/type";

const App = () => {
  const { i18nT } = useI18n<I18nKeyDTO>();
  initI18n();

  return (
    <>
      <header className="tw-bg-blue-50 tw-shadow-lg tw-py-3">
        <div className="tw-container">
          <div className="tw-flex tw-items-center tw-justify-between">
            <div className="tw-flex tw-items-center tw-gap-x-3">
              <img src={logo} alt="" />
              <h2>{i18nT("HEADER.TITLE")}</h2>
            </div>
            <div className="tw-flex tw-items-center tw-gap-x-3">
              <Autocomplete
                size="small"
                style={{
                  width: "250px",
                }}
                options={[]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={i18nT("HEADER.LOCATION")}
                    size="small"
                  />
                )}
              />
              <IconButton>
                <Settings />
              </IconButton>
            </div>
          </div>
        </div>
      </header>
      <main className="tw-py-10">
        <div className="tw-container">
          <div className="tw-flex tw-items-center tw-flex-wrap -tw-m-5">
            <div className="tw-w-6/12 tw-p-5">
              <div className="tw-bg-slate-200 tw-shadow-2xl tw-p-5 tw-rounded-3xl tw-min-h-48">hi</div>
            </div>
            <div className="tw-w-6/12 tw-p-5">
              <div className="tw-bg-slate-200 tw-shadow-2xl tw-p-5 tw-rounded-3xl tw-min-h-48">hi</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default App;
