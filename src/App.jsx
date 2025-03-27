import { useEffect, useState } from "react";
import { useGetCurrentWeatherQuery } from "./store/api/currentWeatherApi";
import { useTheme } from "./context/Theme/useTheme";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherForecastCrad from "./components/WeatherForecastCard";
import HumidityChart from "./components/HumidityChart";
import TemperatureGraph from "./components/TemperatureGraph";
import Modal from "./components/Modal";
import { developer } from "./utils/developerData";
import Loader from "./components/Loader";
import CityNotFound from "./components/CityNotFound";
import DesignSystem from "./components/DesignSystem";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("Neralakatte");
  const [graphData, setGraphData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesignSystem, setIsDesignSystem] = useState(false);

  const { data, isLoading, isError } = useGetCurrentWeatherQuery(searchTerm);
  const { theme, toggleTheme } = useTheme();

  const handleSubmit = (term) => {
    setSearchTerm(term);
  };
  const updateGraphData = (dataForGraph) => {
    setGraphData(dataForGraph);
  };
  const handleDeveloper = () => {
    setIsModalOpen(true);
  };
  const onClose = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    setIsDesignSystem(false);
  }, [searchTerm]);

  const handleDesignSystem = () => {
    setIsDesignSystem((prev) => !prev);
  };

  return (
    <div className="app">
      <header className="header">
        <SearchBar onFormSubmit={handleSubmit} />

        <div className="header__right-side">
          <div className="header-item header__design-system" onClick={handleDesignSystem}>
            Design System
          </div>
          <div className="header-item app-theme" onClick={toggleTheme}>
            {theme === "light" ? "🌞" : "🌛"}
          </div>
          <div className="app-developer-detiles" onClick={handleDeveloper}>
            <img
              className="app-developer-image "
              src={developer.image}
              alt="Developer"
              loading="lazy"
            />
          </div>
          {isModalOpen ? <Modal developer={developer} onClose={onClose} /> : ""}
        </div>
      </header>

      <div className="card__details">
        {isDesignSystem ? (
          <DesignSystem />
        ) : isError ? (
          <CityNotFound city={searchTerm} />
        ) : isLoading ? (
          <Loader />
        ) : (
          <>
            <WeatherCard data={data} />

            <div className="app__right-side">
              <div className="app__right-side--top-section">
                <TemperatureGraph forecastData={graphData} />
                <HumidityChart forecastData={graphData} />
              </div>

              <WeatherForecastCrad
                dataForGraph={updateGraphData}
                lat={data?.coord?.lat}
                lon={data?.coord?.lon}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
