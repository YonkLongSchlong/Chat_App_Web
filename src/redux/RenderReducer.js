import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  renderResult: false,
}

export const RenderReducer = createSlice({
  name: 'render',
  initialState,
  reducers: {
    reRender: (state, action) => {
      state.renderResult = !state.renderResult;
    }
  },
})

export const { reRender } = RenderReducer.actions

export default RenderReducer.reducer