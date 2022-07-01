import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'weather',
    initialState: {
        cities: ['Oslo', 'Lillehammer', 'Hamar', 'Gjøvik', 'Trondheim',],
    },
    reducers: {
        setCities: (state, action) => {
            if(!state.cities.some(city => city === action.payload)) {
                state.cities.push(action.payload);
            }
        },
        removeCity: (state, action) => { 
            state.cities = state.cities.filter(city => city !== action.payload);
        },
    },
})

export const selectCities = (state) => {
    return state.user.cities
}

export default userSlice.reducer
export const { setCities, removeCity } = userSlice.actions