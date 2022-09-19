import { Provider } from "jotai";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import EN from "./EN";

import "./i18n/react-i18next";
import { MyGlobalStyle } from "./styles/styled";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
let lng = ["zh"];
root.render(
  <Suspense fallback="loading">
    <Provider>
      <MyGlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<App />} />
          {lng.map((item) => {
            return <Route path={`/${item}`} element={<EN />} />;
          })}
        </Routes>
      </BrowserRouter>
    </Provider>
  </Suspense>
);
