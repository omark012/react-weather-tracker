import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import Footer from "./components/Footer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [city, setCity] = useState("chennai");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleColorMode = () => {
    setIsDarkMode((prevValue) => !prevValue);
    document.documentElement.classList.toggle("dark");
  };

  const fetchData = async (cityName) => {
    setLoading(true);
    try {
      const currentWeatherPromise = fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=bf9306ba2c2e58fe1bab9c51cceb4749`
      );
      const forecastPromise = fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=bf9306ba2c2e58fe1bab9c51cceb4749`
      );

      const responses = await Promise.all([
        currentWeatherPromise,
        forecastPromise,
      ]);

      if (!responses[0].ok || !responses[1].ok) {
        throw new Error("Network response was not ok");
      }

      const weatherData = await responses[0].json();
      const forecastData = await responses[1].json();

      setCurrentWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (newCity) => {
    setCity(newCity);
    fetchData(newCity);
  };

  console.log(forecast);
  useEffect(() => {
    fetchData(city); // Fetch data for the default city on initial load
  }, []);

  return (
    <div className="">
      <div className="min-h-screen bg-sky-100 dark:bg-sky-900">
        <Navbar toggleColorMode={toggleColorMode} isDarkMode={isDarkMode} />
        <WeatherCard
          data={currentWeather}
          loading={loading}
          onSearch={handleSearch}
        />
        <Forecast forecastData={forecast} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
