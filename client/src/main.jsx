import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-syacae2yn3gq1mfy.us.auth0.com"
     clientId="ZhSXJjcNQSB1zKuAnRwW98Sci8873vNG"
     authorizationParams={{
      redirect_uri: "https://flet-dekho9.vercel.app/"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
