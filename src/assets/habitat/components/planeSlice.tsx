import { createSlice } from "@reduxjs/toolkit"

interface SelectionState {
    x: any,
    y: any;
}

const initialState: SelectionState = {
    x: 0,
    y: 0
}

const planeSlice = createSlice({
    name: "selection",
    initialState,
    reducers: {
        setX: (state, action) => {
            state.x = action.payload;
        },
        setY: (state, action) => {
            state.y = action.payload;
        }
    },
});

export const { setX, setY } = planeSlice.actions;

export default planeSlice.reducer;