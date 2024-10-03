import React from "react";

const Forecast = ({ forecastData }) => {
  if (!forecastData) return null; // Handle loading or no data
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const dayInWeek = new Date().getDay();
  const forecastDays = weekdays
    .slice(dayInWeek, weekdays.length)
    .concat(weekdays.slice(0, dayInWeek));

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl dark:text-white font-bold text-center mb-6">
        7-Day Weather Forecast
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-4">
        {forecastData.list.slice(0, 7).map((day, index) => (
          // Card
          <div
            key={index}
            className="forecastCard bg-sky-200 text-black dark:bg-sky-950 
            dark:text-white shadow-lg rounded-lg p-4 flex flex-col items-center"
          >
            <h3 className="text-lg font-semibold">{forecastDays[index]}</h3>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              className="h-17 w-17"
            />
            <p className="text-xl font-bold">{Math.round(day.main.temp)}°C</p>
            <p className="text-gray-500 dark:text-gray-200">
              {day.weather[0].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
