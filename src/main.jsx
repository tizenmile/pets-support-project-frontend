import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles";
import { HashRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <ThemeProvider theme={theme}>
            <App />
            <GlobalStyle />
          </ThemeProvider>
        </HashRouter>
      </PersistGate>
    </Provider>
);

