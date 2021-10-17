import { combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import { configureStore } from '@reduxjs/toolkit';
import count from './slices/count.slice'
import tick from './slices/tick.slice'


const combinedReducer = combineReducers({
  count,
  tick,
})

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    // console.log(nextState, action ,state);
    // preserve count value on client side navigation
    if (state.count.value) {
      return {
        ...nextState,
        count:{
          ...nextState.count,
          value: state.count.value
        }
      }
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

export function makeStore() {
  return configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
  })
}

export const wrapper = createWrapper(makeStore)
