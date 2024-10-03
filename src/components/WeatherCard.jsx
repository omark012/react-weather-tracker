// src/WeatherCard.js
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const WeatherCard = ({ data, loading, onSearch, weatherImage }) => {
  const [inputCity, setInputCity] = useState("");

  const handleInputChange = (event) => {
    setInputCity(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(inputCity);
  };

  return (
    <div className="mt-10">
      {/* Search bar */}
      <div className="search max-w-lg mx-auto mt-10 ">
        <form onSubmit={handleSearch} className="relative w-full ">
          <input
            type="text"
            value={inputCity}
            onChange={handleInputChange}
            name="inputCity"
            placeholder="Search by City"
            className="w-full text-md p-4 pr-14 border border-gray-300 
            rounded-md shadow-lg outline-none dark:bg-gray-800 
            dark:text-white"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center p-4 
            text-white bg-blue-500 border-y border-r border-gray-300  
              rounded-r-md hover:bg-blue-600 ease-in-out"
          >
            <FaSearch />
          </button>
        </form>
      </div>

      {/* Card */}
      {!data ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div
          className="card mt-5 max-w-lg mx-auto shadow-xl border border-1 
      border-zinc-200 rounded-lg overflow-hidden bg-white 
      dark:bg-slate-600 
      dark:text-white"
        >
          {/* Header with Weather Image */}
          <div
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${weatherImage})` }}
          >
            <div className="flex flex-col-reverse items-center justify-center h-full bg-black bg-opacity-40  ">
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt={data.weather[0].description}
                className="w-25"
              />
              <h2 className="text-xl sm:text-2xl text-white">
                {data.name}, {data.sys.country}
              </h2>
            </div>
          </div>

          {/* Body of the Card */}
          <div className="p-4 sm:p-8">
            <div className="flex justify-between items-baseline">
              <h3 className="text-6xl sm:text-7xl font-bold ">
                {Math.round(data.main.temp)}°C
              </h3>
              <div
                className="text-sm sm:text-md text-gray-600 
            dark:text-white"
              >
                <div
                  className="border-b border-gray-700 dark:border-white 
                flex items-center justify-between py-1"
                >
                  <span>Feels like:</span>
                  <span className="font-bold">
                    {Math.round(data.main.feels_like)}°C
                  </span>
                </div>
                <div
                  className="border-b border-gray-700 dark:border-white 
                flex items-center justify-between py-1"
                >
                  <span>Wind:</span>
                  <span className="font-bold">{data.wind.speed} m/s</span>
                </div>
                <div
                  className="border-b border-gray-700 dark:border-white 
                flex items-center justify-between py-1"
                >
                  <span>Humidity: </span>
                  <span className="font-bold">{data.main.humidity}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Pressure: </span>
                  <span className="font-bold">{data.main.pressure} hPa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
