import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store";

const allParams = (state: RootState) => state

const gameParams = (state: RootState) => state.game

export const getDicesMeanings = (state: RootState) => gameParams(state).dicesMeanings

export const getPlayers = createSelector(allParams, (state: RootState) => state.game.users)

export const getWhoseThrow = (state: RootState) => gameParams(state).whoseThrow

export const getDiceCheck = (state: RootState) => gameParams(state).diceCheck

export const getDicesAmount = (state: RootState) => gameParams(state).dicesAmount

export const getUserStatus = (state: RootState) => gameParams(state).users[0].status
