import { getWeatherIcon, getWeatherDescription } from '../utils/weather'

export default function Forecast({ daily }) {
  if (!daily) return null

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const today = new Date()

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">7-Day Forecast</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {daily.weather_code.map((code, index) => {
          const date = new Date(today)
          date.setDate(date.getDate() + index)
          const dayName = days[date.getDay()]
          const maxTemp = Math.round(daily.temperature_2m_max[index])
          const minTemp = Math.round(daily.temperature_2m_min[index])
          const icon = getWeatherIcon(code)

          return (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center">
              <p className="font-semibold text-gray-700 mb-3">
                {dayName} {date.getDate()}
              </p>
              <p className="text-4xl mb-3">{icon}</p>
              <p className="text-sm text-gray-600 mb-3 min-h-8">
                {getWeatherDescription(code)}
              </p>
              <div className="flex justify-around text-sm">
                <div>
                  <p className="text-gray-500">High</p>
                  <p className="font-semibold text-gray-800">{maxTemp}°</p>
                </div>
                <div>
                  <p className="text-gray-500">Low</p>
                  <p className="font-semibold text-gray-800">{minTemp}°</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
