import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./styles/GlobalStyles";
import Reset from "./styles/reset";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Reset />
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
    s
  </>
);

reportWebVitals();
