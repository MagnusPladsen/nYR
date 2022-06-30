import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"

const apiKey = 'e830364e590c9fc8a17ba641130f732d'

export const fetchWeather = createAsyncThunk('weather/getWeather', async (city) => {
    const cityName = city
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    const response = await fetch(apiCall)
    const data = await response.json()
    return [data, cityName]
})

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        city: {

        }
    },
    reducers: {
        getWeather: (state, action) => {
            return state.weather
        },
    },
    extraReducers: {
        [fetchWeather.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchWeather.fulfilled]: (state, action) => {
            const [data, cityName] = action.payload;
            if(!state.city[cityName]) {
                state.city[cityName] = {}
            }
            state.city[cityName].temp = Math.round(data.main.temp - 273.15);
            state.city[cityName].weather = data.weather[0].main;
            state.city[cityName].isLoading = false;
            state.city[cityName].hasError = false;
        },
        [fetchWeather.rejected]: (state, action) => {
            state.temp = NaN;
            state.weather = 'Clear';
            state.isLoading = false;
            state.hasError = true;
        },
        
    }
})

export const selectWeather = (state, cityName) => {
    if(state.weather.city && cityName){
        return state.weather.city[cityName]
    }
    return undefined
}

export default weatherSlice.reducer
export const { getWeather } = weatherSlice.actions