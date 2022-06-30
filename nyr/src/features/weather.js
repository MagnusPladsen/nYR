import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"

const apiKey = 'e830364e590c9fc8a17ba641130f732d'

export const fetchOsloWeather = createAsyncThunk(
"weather/fetchOsloWeather",
async () => {
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=Oslo&appid=${apiKey}`
    const response = await fetch(apiCall)
    const data = await response.json()
    return data
})

export const fetchLillehammerWeather = createAsyncThunk(
"weather/fetchLillehammerWeather",
async () => {
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=Lillehammer&appid=${apiKey}`
    const response = await fetch(apiCall)
    const data = await response.json()
    return data
})

export const fetchHamarWeather = createAsyncThunk(
"weather/fetchHamarWeather",
async () => {
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=Hamar&appid=${apiKey}`
    const response = await fetch(apiCall)
    const data = await response.json()
    return data
})

export const fetchTrondheimWeather = createAsyncThunk(
    "weather/fetchTrondheimWeather",
    async () => {
        const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=Trondheim&appid=${apiKey}`
        const response = await fetch(apiCall)
        const data = await response.json()
        return data
    })

export const fetchGjovikWeather = createAsyncThunk(
    "weather/fetchGjovikWeather",
    async () => {
        const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=Gjøvik&appid=${apiKey}`
        const response = await fetch(apiCall)
        const data = await response.json()
        return data
    })

export const fetchWeather = createAsyncThunk('weather/getWeather', async (city) => {
    const cityName = city
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    const response = await fetch(apiCall)
    const data = await response.json()
    return data
})

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        temp: 0,
        weather: 'Clear',
        isLoading: false,
        hasError: false,
        oslo: {
            temp: NaN,
            weather: 'Clear',
            isLoading: false,
            hasError: false,
        },
        lillehammer: {
            temp: NaN,
            weather: 'Clear',
            isLoading: false,
            hasError: false,
        },
        hamar: {
            temp: NaN,
            weather: 'Clear',
            isLoading: false,
            hasError: false,
        },
        trondheim: {
            temp: NaN,
            weather: 'Clear',
            isLoading: false,
            hasError: false,
        },
        gjovik: {
            temp: NaN,
            weather: 'Clear',
            isLoading: false,
            hasError: false,
        },
    },
    reducers: {
        getWeather: (state, action) => {
            return state.weather
        },
        getTemp: (state, action) => {
            return state.temp
        },
    },
    extraReducers: {
        [fetchWeather.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchWeather.fulfilled]: (state, action) => {
            state.temp = Math.round(action.payload.main.temp - 273.15);
            state.weather = action.payload.weather[0].main;
            state.isLoading = false;
            state.hasError = false;
        },
        [fetchWeather.rejected]: (state, action) => {
            state.temp = NaN;
            state.weather = 'Clear';
            state.isLoading = false;
            state.hasError = true;
        },
        ////////////////////////////////////////////////////
        [fetchOsloWeather.pending]: (state, action) => {
            state.oslo.isLoading = true;
            state.oslo.hasError = false;
        },
        [fetchOsloWeather.fulfilled]: (state, action) => {
            state.oslo.temp = Math.round(action.payload.main.temp - 273.15);
            state.oslo.weather = action.payload.weather[0].main;
            state.oslo.isLoading = false;
            state.oslo.hasError = false;
        },
        [fetchOsloWeather.rejected]: (state, action) => {
            state.oslo.temp = NaN;
            state.oslo.weather = 'Clear';
            state.oslo.isLoading = false;
            state.oslo.hasError = true;
        },
        ////////////////////////////////////////////////////
        [fetchLillehammerWeather.pending]: (state, action) => {
            state.lillehammer.isLoading = true;
            state.lillehammer.hasError = false;
        },
        [fetchLillehammerWeather.fulfilled]: (state, action) => {
            state.lillehammer.temp = Math.round(action.payload.main.temp - 273.15);
            state.lillehammer.weather = action.payload.weather[0].main;
            state.lillehammer.isLoading = false;
            state.lillehammer.hasError = false;
        },
        [fetchLillehammerWeather.rejected]: (state, action) => {
            state.lillehammer.temp = NaN;
            state.lillehammer.weather = 'Clear';
            state.lillehammer.isLoading = false;
            state.lillehammer.hasError = true;
        },
        ////////////////////////////////////////////////////
        [fetchHamarWeather.pending]: (state, action) => {
            state.hamar.isLoading = true;
            state.hamar.hasError = false;
        },
        [fetchHamarWeather.fulfilled]: (state, action) => {
            state.hamar.temp = Math.round(action.payload.main.temp - 273.15);
            state.hamar.weather = action.payload.weather[0].main;
            state.hamar.isLoading = false;
            state.hamar.hasError = false;
        },
        [fetchHamarWeather.rejected]: (state, action) => {
            state.hamar.temp = NaN;
            state.hamar.weather = 'Clear';
            state.hamar.isLoading = false;
            state.hamar.hasError = true;
        },
        ////////////////////////////////////////////////////
        [fetchTrondheimWeather.pending]: (state, action) => {
            state.trondheim.isLoading = true;
            state.trondheim.hasError = false;
        },
        [fetchTrondheimWeather.fulfilled]: (state, action) => {
            state.trondheim.temp = Math.round(action.payload.main.temp - 273.15);
            state.trondheim.weather = action.payload.weather[0].main;
            state.trondheim.isLoading = false;
            state.trondheim.hasError = false;
        },
        [fetchTrondheimWeather.rejected]: (state, action) => {
            state.trondheim.temp = NaN;
            state.trondheim.weather = 'Clear';
            state.trondheim.isLoading = false;
            state.trondheim.hasError = true;
        },
        ////////////////////////////////////////////////////
        [fetchGjovikWeather.pending]: (state, action) => {
            state.gjovik.isLoading = true;
            state.gjovik.hasError = false;
        },
        [fetchGjovikWeather.fulfilled]: (state, action) => {
            state.gjovik.temp = Math.round(action.payload.main.temp - 273.15);
            state.gjovik.weather = action.payload.weather[0].main;
            state.gjovik.isLoading = false;
            state.gjovik.hasError = false;
        },
        [fetchGjovikWeather.rejected]: (state, action) => {
            state.gjovik.temp = NaN;
            state.gjovik.weather = 'Clear';
            state.gjovik.isLoading = false;
            state.gjovik.hasError = true;
        },
        
        
    }
})

export const selectGjovikTemp = state => state.weather.gjovik.temp;
export const selectGjovikWeather = state => state.weather.gjovik.weather;

export const selectTrondheimTemp = state => state.weather.trondheim.temp;
export const selectTrondheimWeather = state => state.weather.trondheim.weather;

export const selectHamarTemp = state => state.weather.hamar.temp;
export const selectHamarWeather = state => state.weather.hamar.weather;

export const selectLillehammerTemp = state => state.weather.lillehammer.temp;
export const selectLillehammerWeather = state => state.weather.lillehammer.weather;

export const selectOsloTemp = state => state.weather.oslo.temp;
export const selectOsloWeather = state => state.weather.oslo.weather;

export const selectWeather = state => state.weather.weather;
export const selectTemp = state => state.weather.temp;

export default weatherSlice.reducer
export const { getWeather } = weatherSlice.actions