import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { ThemeContextProvider } from "./context/Theme/ThemeContext.jsx";
import { UnixToLocalTimeContextProvider } from "./context/UnixToLocalTime/UnixToLocalTimeContext.jsx";
import { ConvertToCelsiusProvider } from "./context/ConvertToCelsius/ConvertToCelsiusContext.jsx";
import { GetCurrentDayProvider } from "./context/GetCurrentDay/GetCurrentDayContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <UnixToLocalTimeContextProvider>
          <ConvertToCelsiusProvider>
            <GetCurrentDayProvider>
              <App />
            </GetCurrentDayProvider>
          </ConvertToCelsiusProvider>
        </UnixToLocalTimeContextProvider>
      </ThemeContextProvider>
    </Provider>
  </StrictMode>
);
