import { getWeatherDescription, getWeatherIcon } from '../utils/weather'

export default function CurrentWeather({ current }) {
  if (!current) return null

  const temp = Math.round(current.temperature_2m)
  const description = getWeatherDescription(current.weather_code)
  const icon = getWeatherIcon(current.weather_code)

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-gray-600 text-sm mb-2">Current Weather</p>
          <h2 className="text-5xl font-bold text-gray-800">{temp}°C</h2>
          <p className="text-xl text-gray-600 mt-2">{description}</p>
        </div>
        <div className="text-8xl">{icon}</div>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
        <div>
          <p className="text-gray-600 text-sm">Humidity</p>
          <p className="text-2xl font-semibold text-gray-800">{current.relative_humidity_2m}%</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Wind Speed</p>
          <p className="text-2xl font-semibold text-gray-800">{Math.round(current.wind_speed_10m)} km/h</p>
        </div>
      </div>
    </div>
  )
}
