import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from "../../types/types";

interface GameState {
  users: User[];
  counter: number;
  dicesMeanings?: number[];
  whoseThrow: number | null
}

const initialState = {
  users: [
    {
      id: 0,
      name: 'Человек',
      check: 0,
      message: '',
      status: '',
    },
    {
      id: 1,
      name: 'Робот',
      check: 0,
      message: '',
      status: '',
    },
  ],
  counter: 0,
  dicesMeanings: [],
  whoseThrow: null
} as GameState

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addCounter(state, action: PayloadAction<number>) {
      state.counter += action.payload
    },
    addDicesMeanings(state, action: PayloadAction<number[]>) {
      state.dicesMeanings = action.payload
    }
  }
})

export const {addCounter, addDicesMeanings} = gameSlice.actions

export default gameSlice.reducer;