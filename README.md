# Claude Academy - Weather Forecast

A modern weather forecast application for London built with React and Node.js. Displays current weather conditions and a 7-day forecast using real-time data from Open-Meteo.

## Features

- **Current Weather**: Real-time temperature, humidity, and wind speed
- **7-Day Forecast**: Daily weather predictions with min/max temperatures
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **No API Key Required**: Uses Open-Meteo free weather API

## Tech Stack

- **Frontend**: React with Vite, Tailwind CSS
- **Backend**: Node.js with Express
- **Weather Data**: Open-Meteo API

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/nandohs/claude-academy.git
cd claude-academy
```

2. Install dependencies for both backend and frontend
```bash
npm run install-all
```

### Running the Project

#### Development Mode

In one terminal, start the backend:
```bash
npm run dev
```

In another terminal, start the frontend:
```bash
npm run client
```

The frontend will be available at `http://localhost:5173`
The backend API is at `http://localhost:3001`

#### Production Mode

1. Build the frontend:
```bash
npm run build
```

2. Start the server:
```bash
npm start
```

The application will be available at `http://localhost:3001`

## API Endpoints

### GET `/api/weather`
Returns current weather and 7-day forecast for London.

**Response:**
```json
{
  "success": true,
  "data": {
    "current": {
      "temperature_2m": 15.2,
      "weather_code": 0,
      "wind_speed_10m": 10,
      "relative_humidity_2m": 65
    },
    "daily": {
      "weather_code": [0, 1, 2, ...],
      "temperature_2m_max": [18, 17, 16, ...],
      "temperature_2m_min": [12, 11, 10, ...]
    },
    "timezone": "Europe/London"
  }
}
```

## Project Structure

```
claude-academy/
├── server.js              # Express server
├── package.json           # Backend dependencies
├── client/                # React frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   └── index.css
│   ├── package.json       # Frontend dependencies
│   └── vite.config.js
└── README.md
```

## Weather Codes

The Open-Meteo API returns WMO weather codes. Common codes:
- 0: Clear sky
- 1-2: Mainly clear
- 3: Overcast
- 45: Foggy
- 51-67: Drizzle and rain
- 71-85: Snow
- 80: Rain showers
- 95-99: Thunderstorm

## License

MIT
# claude-academy
