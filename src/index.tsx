import { Provider } from "jotai";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Clock from "./components/Clock";
import "./i18n/react-i18next";
import { MyGlobalStyle } from "./styles/styled";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Suspense fallback="loading">
    <Provider>
      <MyGlobalStyle />
      <Clock seconds={5000} />
      <App />
    </Provider>
  </Suspense>
);
