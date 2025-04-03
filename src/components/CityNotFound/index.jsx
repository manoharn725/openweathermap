import Lottie from "lottie-react";
import catSleeping from "../../assets/catSleeping.json";
import "./index.css";

const CityNotFound = ({ city, unsetStyle }) => {
  return (
    <div className={unsetStyle ? 'unset__not-found' : 'not-found'}>
      <h1>City {`"${city}"`} not found!</h1>
      <Lottie
        animationData={catSleeping}
        autoPlay
        loop
        style={{ width: 300, height: 300 }}
      />
      <h1>Please try searching again!</h1>
    </div>
  );
};
export default CityNotFound;
