import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lastUpdate: 0,
  light: false,
}

const tickSlice = createSlice({
  name: 'tick',
  initialState,
  reducers: {
    setAppTimer(state, action) {
      const { isServer, ts } = action.payload;
      state.lastUpdate = ts;
      state.light = !isServer;
    },
  },
})

export const { setAppTimer } = tickSlice.actions
export default tickSlice.reducer