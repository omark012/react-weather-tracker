// src/WeatherCard.js
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Spinner from "./Spinner";

const WeatherCard = ({ data, onSearch }) => {
  const [inputCity, setInputCity] = useState("");

  const handleInputChange = (event) => {
    setInputCity(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(inputCity);
  };

  return (
    <div className="mt-6 p-3 sm:p-0">
      {/* Search bar */}
      <div className="search max-w-lg mx-auto">
        <form onSubmit={handleSearch} className="relative w-full ">
          <input
            type="text"
            value={inputCity}
            onChange={handleInputChange}
            name="inputCity"
            placeholder="Search by City"
            className="w-full text-md p-4 pr-14 border border-gray-300 
            rounded-md shadow-lg outline-none bg-sky-200 dark:bg-sky-950
            dark:text-white dark:border-none"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center p-4 
            text-white bg-blue-500 border-y border-r border-gray-300  
              rounded-r-md hover:bg-blue-600 ease-in-out dark:border-none"
          >
            <FaSearch />
          </button>
        </form>
      </div>

      {/* Card */}
      {!data ? (
        <Spinner />
      ) : (
        <div
          className="card mt-4 max-w-lg mx-auto shadow-xl border border-1 
      border-zinc-200 rounded-lg overflow-hidden bg-sky-200
      dark:bg-sky-950 dark:text-white dark:border-none"
        >
          {/* Header with Weather Image */}
          <div
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1711025950384-de14eed483bf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsdWUlMjBza3klMjB3aXRoJTIwY2xvdWR8ZW58MHx8MHx8fDA%3D)`,
            }}
          >
            <div className="flex flex-col-reverse items-center justify-center h-full bg-black bg-opacity-30  ">
              <p className="text-white">{data.weather[0].description}</p>
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt={data.weather[0].description}
                className="w-25"
              />
              <h2 className="flex items-center text-xl sm:text-2xl text-white">
                <IoLocationSharp /> {data.name}, {data.sys.country}
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
