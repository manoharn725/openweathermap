import {lightTheme, darkTheme} from '../../utils/themeConfig';
import Loader from "../Loader";
import CityNotFound from "../CityNotFound";
import "./index.css";

const DesignSystem = () => {

  return (
    <div className="design-system__wrapper">
      <h2 style={{ textAlign: "center" }}>Design System</h2>
      <div className="design-system">
        <div className="light-theme__wrapper">
          <h3>Light Theme :</h3>
          <div className="color__design-system">
            {lightTheme.map(({ id, color, colorCode }) => (
              <span
                className="color__item"
                style={{
                  backgroundColor: `${colorCode}`,
                  color: `${colorCode === "#000" ? "#ffffff" : "#000"}`,
                }}
                key={id}
              >
                {color}
              </span>
            ))}
          </div>
        </div>

        <div className="dark-theme__wrapper">
          <h3>Dark Theme :</h3>
          <div className="color__design-system">
            {darkTheme.map(({ id, color, colorCode }) => (
              <span
                className="color__item"
                style={{
                    backgroundColor: `${colorCode}`,
                    color: `${colorCode === "#ffffff" ? "#000" : "#ffffff"}`,
                  }}
                key={id}
              >
                {color}
              </span>
            ))}
          </div>
        </div>

        <div className="design__lottie-items">
          <div className="loader__wrapper">
            <h3>Loader :</h3>
            <Loader unsetStyle={true} />
          </div>

          <div className="city-not-found__wrapper">
            <h3>City Not Found :</h3>
            <CityNotFound unsetStyle={true} />
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default DesignSystem;
