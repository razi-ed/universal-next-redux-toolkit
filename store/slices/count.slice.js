import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 1 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCount(state) {
      state.value++
    },
  },
})

export const { addCount } = counterSlice.actions
export default counterSlice.reducer