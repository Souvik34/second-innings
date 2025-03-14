import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./redux/store";


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider>
      <App />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />  
    </ThemeProvider>
  </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
