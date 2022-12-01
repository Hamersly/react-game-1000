import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from "../../types/types";

interface GameState {
  users: User[];
  diceCheck: number;
  dicesMeanings?: number[];
  whoseThrow: number | null
}

const initialState = {
  users: [
    {
      id: 0,
      name: 'Человек',
      userCheck: 0,
      message: '',
      status: '',
    },
    {
      id: 1,
      name: 'Робот',
      userCheck: 0,
      message: '',
      status: '',
    },
  ],
  diceCheck: 0,
  dicesMeanings: [],
  whoseThrow: null
} as GameState

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addDiceCheck(state, action: PayloadAction<number>) {
      state.diceCheck += action.payload
    },
    addDicesMeanings(state, action: PayloadAction<number[]>) {
      state.dicesMeanings = action.payload
    }
  }
})

export const {addDiceCheck, addDicesMeanings} = gameSlice.actions

export default gameSlice.reducer;