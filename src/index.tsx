import { Provider } from "jotai";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n/i18n";
import { MyGlobalStyle } from "./styles/styled";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider>
    <MyGlobalStyle />
    <App />
  </Provider>
);
