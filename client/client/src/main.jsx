import "./index.css";
import "./styles.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./context/AuthContext";
import { MantineProvider } from "@mantine/core";


//main stylesheet import

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
  <React.StrictMode>
  <MantineProvider
  theme={{
    headings: {
      // properties for all headings
      fontWeight: 400,
      fontFamily: 'Hammersmith One',
    },
    fontFamily: 'Fredoka', 
    components: {
      Button: {
        styles: {
          root : { 

            // properties for all buttons
            fontFamily: 'Fredoka',
            fontWeight: 400,
            borderRadius: 35,
            backgroundColor: '#07399E',
          }
        }
      }
    }

  }}
  >
    <App />
  </MantineProvider>
  </React.StrictMode>
  </AuthContextProvider>
)
