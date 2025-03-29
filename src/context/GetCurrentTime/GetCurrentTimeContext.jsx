import { createContext, useEffect, useState, useCallback } from "react";

const GetCurrentTimeContext = createContext();

export const GetCurrentTimeProvider = ({ children }) => {
  
  const getCurrentHour = useCallback(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const suffix = hours >= 12 ? "PM" : "AM";
    const hours12 = (hours % 12 || 12).toString().padStart(2, "0"); // Convert 0 to 12 for midnight
    const time12 = `${hours12}:${minutes}:${seconds} ${suffix}`;
    return time12;
  },[]);
  
  const [currentTime, setCurrentTime] = useState(getCurrentHour());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentHour());
    }, 1000);
    return () => clearInterval(interval);
  }, [getCurrentHour]);

  return (
    <GetCurrentTimeContext.Provider
      value={{ currentTime }}
    >
      {children}
    </GetCurrentTimeContext.Provider>
  );
};

export default GetCurrentTimeContext;