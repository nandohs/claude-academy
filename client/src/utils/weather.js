export const getWeatherIcon = (weatherCode) => {
  if (weatherCode === 0) return '☀️'
  if (weatherCode === 1 || weatherCode === 2) return '🌤️'
  if (weatherCode === 3) return '☁️'
  if (weatherCode === 45 || weatherCode === 48) return '🌫️'
  if (weatherCode >= 51 && weatherCode <= 67) return '🌧️'
  if (weatherCode >= 71 && weatherCode <= 77) return '🌨️'
  if (weatherCode === 80 || weatherCode === 81 || weatherCode === 82) return '🌧️'
  if (weatherCode >= 85 && weatherCode <= 86) return '🌨️'
  if (weatherCode >= 95 && weatherCode <= 99) return '⛈️'
  return '❓'
}

export const getWeatherDescription = (weatherCode) => {
  const descriptions = {
    0: 'Clear Sky',
    1: 'Mainly Clear',
    2: 'Partly Cloudy',
    3: 'Overcast',
    45: 'Foggy',
    48: 'Foggy',
    51: 'Light Drizzle',
    53: 'Moderate Drizzle',
    55: 'Dense Drizzle',
    61: 'Slight Rain',
    63: 'Moderate Rain',
    65: 'Heavy Rain',
    71: 'Slight Snow',
    73: 'Moderate Snow',
    75: 'Heavy Snow',
    77: 'Snow Grains',
    80: 'Slight Rain Showers',
    81: 'Moderate Rain Showers',
    82: 'Violent Rain Showers',
    85: 'Slight Snow Showers',
    86: 'Heavy Snow Showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with Hail',
    99: 'Thunderstorm with Hail'
  }
  return descriptions[weatherCode] || 'Unknown'
}
