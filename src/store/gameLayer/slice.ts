import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from "../../types/types";

interface IGameState {
  users: IUser[];
  diceCheck: number;
  dicesMeanings?: number[];
  dicesAmount: number;
  humanThrow: boolean;
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
  dicesAmount: 5,
  humanThrow: true
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
    addUserCheck(state, action: PayloadAction<number>) {
      state.users[0].userCheck += action.payload
    },
    addDicesAmount(state, action: PayloadAction<number>) {
      state.dicesAmount = action.payload
    },
    addUserStatus(state, action: PayloadAction<number>) {
      state.users[0].status += action.payload
    },
    changeHumanThrow(state, action: PayloadAction<boolean>) {
      state.humanThrow = !action.payload
    },
    addRobotCheck(state, action: PayloadAction<number>) {
      state.users[1].userCheck += action.payload
    },
    addRobotStatus(state, action: PayloadAction<number>) {
      state.users[1].status += action.payload
    },
  }
})

export const {
  addDiceCheck,
  addDicesMeanings,
  diceCheckZero,
  addUserCheck,
  addDicesAmount,
  addUserStatus,
  changeHumanThrow,
  addRobotCheck,
  addRobotStatus,
} = gameSlice.actions

export default gameSlice.reducer;