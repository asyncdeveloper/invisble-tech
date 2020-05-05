import {Api} from "./Api";
import {AxiosRequestConfig} from 'axios';
import {apiConfig} from "../config/apiConfig";
import * as dotenv from "dotenv";

dotenv.config();

class WeatherApi extends Api {

    private readonly apiKey: string ;

    constructor(config: AxiosRequestConfig) {
        super(config);

        this.apiKey = process.env.WEATHER_API_KEY;
    }

    /**
     * Get Weather information from an HTTP GET Request
     * @param {String} location - address
     * @returns {Object} data - location information,
     */
    public async getWeatherFromLocation(location: string) {
        const weatherEndpoint: string = apiConfig.baseURL + `?key=${this.apiKey}&q=${location}`;

        try {
            const response = await this.get(weatherEndpoint);
            const data: any = response.data;
            return  {
                locationName: data.location.name,
                locationCountry: data.location.country,
                locationWeather: data.current.temp_c,
                locationCurrentTime: data.location.localtime
            }
        } catch (e) {
            console.log(`Unable to load weather info for: ${location}`);
        }
    }

}

export const weatherApi = new WeatherApi(apiConfig);
