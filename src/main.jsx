import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { ThemeContextProvider } from "./context/Theme/ThemeContext.jsx";
import { GetCurrentTimeProvider } from "./context/GetCurrentTime/GetCurrentTimeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <GetCurrentTimeProvider>
          <App />
        </GetCurrentTimeProvider>
      </ThemeContextProvider>
    </Provider>
  </StrictMode>
);
