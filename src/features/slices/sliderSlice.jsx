import { createSlice } from '@reduxjs/toolkit'
import { testimonialData } from '../../dummydata/testimonialdata';

export const sliderSlice = createSlice({
    name: 'slider',
    initialState: {
        value: 0,
        length: testimonialData.length,

    },
    reducers: {
        nextSlide(state, action) {
            console.log(state, action)
            state.value = action.payload > state.length  ? 0 : action.payload;
        },
        prevSlide(state, action) {
            state.value = action.payload < 0 ? state.length  : action.payload;
        },
        dotSlide() {},
    }
})


export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;