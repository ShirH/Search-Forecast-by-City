import axios from 'axios'

const API_key = '0de73eaa67308dc1cc7465c9ad48fd2e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_key}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}