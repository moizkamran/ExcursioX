import "./index.css";
import "./styles.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { AuthContextProvider } from "./context/AuthContext";
import { Provider } from "react-redux";

//REDUX STORE
import store from "./Redux/Store/store"

//main stylesheet import

ReactDOM.createRoot(document.getElementById("root")).render(
<Provider store={store}>
  <AuthContextProvider>
    <MantineProvider
      theme={{
        colors : {
          brand: [  '#e3eeff',  '#b4cdff',  '#84acfb',  '#548af7',  '#2669f4',  '#104fdb',  '#083eab',  '#022c7b',  '#001a4c',  '#00091e']
        }, 
        primaryColor: 'brand',
        headings: {
          // properties for all headings
          fontWeight: 400,
          fontFamily: 'Hammersmith One',
        },
        fontFamily: 'Fredoka',
        components: {
          Button: {
            styles: {
              root: {

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
  </AuthContextProvider>
      </Provider>
);
