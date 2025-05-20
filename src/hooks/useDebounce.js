import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    if (!value.trim()) {
      setDebounced("");
      return;
    }

    const handler = setTimeout(() => setDebounced(value), delay);
    
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
};
