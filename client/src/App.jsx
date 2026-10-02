import { useState, useEffect } from 'react'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/weather')
        if (!response.ok) throw new Error('Failed to fetch weather')
        const data = await response.json()
        setWeather(data.data)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
    const interval = setInterval(fetchWeather, 600000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-2">Claude Academy</h1>
        <p className="text-blue-100 text-center mb-8">London Weather Forecast</p>

        {loading && (
          <div className="text-center text-white">
            <p className="text-lg">Loading weather data...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-500 text-white p-4 rounded-lg mb-6 text-center">
            <p>Error: {error}</p>
          </div>
        )}

        {weather && (
          <>
            <CurrentWeather current={weather.current} />
            <Forecast daily={weather.daily} />
          </>
        )}
      </div>
    </div>
  )
}

export default App
