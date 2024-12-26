import { useState, useEffect } from 'react';

export const useSearch = (initialValue: string = '', delay: number = 500) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(searchTerm);
    }, delay);

    return () => clearTimeout(timer);
  }, [searchTerm, delay]);

  return {
    searchTerm,
    debouncedValue,
    setSearchTerm,
  };
};
