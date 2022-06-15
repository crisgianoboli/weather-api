import { DateTime } from "luxon";

const API_KEY = "c3529814909bcfcd1e2182430aa17589";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // eslint-disable-next-line no-cond-assign
      if (data.cod !== 200) {
        console.log("no data");
      }
      return data;
    });
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon, description } = weather[0];

  return {
    lat,
    lon,
    temp,
    description,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    speed,
    details,
    icon,
  };
};

const formatForecastWeather = ({ daily, timezone }) => {
  daily = daily.slice(1, 6).map((d) => ({
    title: formatToLocalTime(d.dt, timezone, "ccc"),
    temp: d.temp.day,
    temp_max: d.temp.max,
    temp_min: d.temp.min,
    icon: d.weather[0].icon,
  }));
  return { timezone, daily };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current, minutely, alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { iconUrlFromCode };
