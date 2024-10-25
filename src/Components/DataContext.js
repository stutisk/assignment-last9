import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import yaml from 'js-yaml';

// Create a context
const DataContext = createContext();

// Create a custom hook for easy access to the context
export const useData = () => useContext(DataContext);

// Create a provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/_data/rules.yml'
        );
        const parsedData = yaml.load(response.data); 
        setData(parsedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
