#!/usr/bin/env node

import * as argv from './config/yargs';
import {weatherApi} from "./components/WeatherApi";

class App {

    private address: string;
    private addressList: string[];

    constructor(argv) {
        this.address = argv.default.address;

        this.setAddressList();
    }

    private setAddressList() {
        this.addressList = this.address.split(",").map((item: string) => item.trim());
    }

    public getAddressList() {
        return this.addressList;
    }

}

const app = new App(argv);

app.getAddressList().forEach(async address => {
    const weatherInfo = await weatherApi.getWeatherFromLocation(address);
    console.log(`The Weather in ${weatherInfo.locationName}, ${weatherInfo.locationCountry} is ${weatherInfo.locationWeather}°C and time is ${weatherInfo.locationCurrentTime}`);
});
