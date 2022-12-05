import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from "../../types/types";

interface IGameState {
  users: IUser[];
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
      status: 0,
    },
    {
      id: 1,
      name: 'Робот',
      userCheck: 0,
      message: '',
      status: 0,
    },
  ],
  diceCheck: 0,
  dicesMeanings: [],
  whoseThrow: null
} as IGameState

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addDiceCheck(state, action: PayloadAction<number>) {
      state.diceCheck += action.payload
    },
    addDicesMeanings(state, action: PayloadAction<number[]>) {
      state.dicesMeanings = action.payload
    },
    diceCheckZero(state) {
      state.diceCheck = 0
    },
    addUserCheck(state, action:PayloadAction<any>) {
      state.users[0].userCheck += action.payload
    }
  }
})

export const {addDiceCheck, addDicesMeanings, diceCheckZero, addUserCheck} = gameSlice.actions

export default gameSlice.reducer;