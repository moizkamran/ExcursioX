import "./index.css";
import "./styles.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { AuthContextProvider } from "./context/AuthContext";

//main stylesheet import

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <React.StrictMode>
      <MantineProvider
        theme={{
          headings: {
            // properties for all headings
            fontWeight: 400,
            fontFamily: "Hammersmith One",
          },
        }}
      >
        <App />
      </MantineProvider>
    </React.StrictMode>
  </AuthContextProvider>
);
