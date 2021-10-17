import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 1 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCount(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})

export const { addCount, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer