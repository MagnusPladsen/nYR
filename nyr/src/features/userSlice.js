import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'weather',
    initialState: {
        cities: ['Oslo', 'Lillehammer', 'Hamar', 'Gjøvik', 'Trondheim'],
    },
    reducers: {
        setCities: (state, action) => {
            state.cities.push(action.payload);
        },
        removeCity: (state, index) => {
            state.cities.splice(index, 1);
        },
    },
})

export const selectCities = (state) => {
    return state.user.cities
}

export default userSlice.reducer
export const { setCities, removeCity } = userSlice.actions