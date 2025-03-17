import Lottie from "lottie-react";
import weatherLoader from "../../assets/weatherLoader.json";
import "./index.css";

const Loader = () => {
  return (
    <div className="loader">
      <Lottie
        animationData={weatherLoader}
        autoPlay loop 
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default Loader;
