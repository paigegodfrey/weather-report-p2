import Day from './Day'
import './Forecast.css'

import { parseForecastData } from './utils/utils'

function Forecast({ data }) {

  const parsedData = parseForecastData(data);

  return (
    <div className="forecast-container">
      {parsedData.map((
        <div className="forecast-card" key={parsedData.date}>
          <Day date={parsedData.date} temperature={parsedData.temperature} weather={parsedData.weather} icon={parsedData.icon} />
        </div>
      ))}
    </div>
  );
}

export default Forecast
