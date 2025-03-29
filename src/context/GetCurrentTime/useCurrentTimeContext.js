import { useContext } from "react";
import GetCurrentTimeContext from "./GetCurrentTimeContext";

export const useCurrentTimeContext = () => {
    return useContext(GetCurrentTimeContext)
}