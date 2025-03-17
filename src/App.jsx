import { useState } from "react";
import { useGetCurrentWeatherQuery } from "./store/api/currentWeatherApi";
import { useTheme } from "./context/Theme/useTheme";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherForecastCrad from "./components/WeatherForecastCard";
import HumidityChart from "./components/HumidityChart";
import TemperatureGraph from "./components/TemperatureGraph";
import Modal from "./components/Modal";
import ManoharImage from "./assets/manohar.jpg";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState();
  const [graphData, setGraphData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const developer = {
    name: "Manohar N",
    role: "React Developer",
    image: `${ManoharImage}`,
    skills: [
      "React js",
      "Vite ",
      "Redux Toolkit Query",
      "Javascript",
      "RESTful API integration",
      "Html5",
      "Css3",
      "Git",
      "GitHub",
      "npm",
      "Photoshop",
      "Chart js",
      "Visual studio",
      "Postman",
    ],
    hooks: ["useState", "useEffect ", "useContext", "useMemo", "useRef"],
    webApi: ["localStorage"],
    refer: {
      title: "Design Referenced 👆",
      url: "https://dribbble.com/shots/19266713-Weather-Forecast-Dashboard",
    },
    portfolio: {
      title: "Personal Portfolio 👆",
      url: "https://manoharn725.netlify.app/",
    },
  };

  return (
    <div className="app">
      <header className="header">
        <SearchBar onFormSubmit={handleSubmit} />

        <div className="header__right-side">
          <div className="app-theme" onClick={toggleTheme}>
            {theme === "light" ? "🌞" : "🌛"}
          </div>
          <div className="app-developer-detiles" onClick={handleDeveloper}>
            <img
              className="app-developer-image "
              src={ManoharImage}
              alt="Developer"
            />
          </div>
          {isModalOpen ? <Modal developer={developer} onClose={onClose} /> : ""}
        </div>
      </header>

      {isError ? (
        "Error"
      ) : isLoading ? (
        "Loading"
      ) : (
        <div className="card__details">
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
        </div>
      )}
    </div>
  );
}

export default App;
