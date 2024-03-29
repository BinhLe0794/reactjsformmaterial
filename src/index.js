import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "redux/store";
import App from "./App";
import "./index.scss";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CssBaseline />
        {/* <ThemeProvider theme={theme}> */}
        <SnackbarProvider
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
          <App />
        </SnackbarProvider>
        {/* </ThemeProvider> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
