import {FC, MouseEvent, useEffect} from "react";
import {ButtonBlockDiv, PassButton, PlayButton} from "./ButtonBlock.styled";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {
  addDiceCheck,
  addDicesAmount,
  addDicesMeanings, addRobotCheck, addRobotStatus,
  addUserCheck,
  addUserStatus,
  changeHumanThrow,
  diceCheckZero
} from "../../store/gameLayer/slice";
import {
  getDiceCheck,
  getDicesAmount,
  getHumanThrow,
  getRobotStatus,
  getUserStatus
} from "../../store/gameLayer/selectors";
import {countingDiceCheck, filterDicesAmount, generateDicesMeanings, parseDiceCheck} from "../../helpers/helpers";


export const ButtonBlock: FC = () => {
  const diceCheckStore: number = useAppSelector(getDiceCheck)
  const dicesAmount: number = useAppSelector(getDicesAmount)
  const userStatus: number = useAppSelector(getUserStatus)
  const robotStatus: number = useAppSelector(getRobotStatus)
  const humanThrow = useAppSelector(getHumanThrow)

  const dispatch = useAppDispatch();


  useEffect(() => {
    if (userStatus === 3) {
      dispatch(addUserCheck(-50))
      dispatch(addUserStatus(-3))
    }
    if (robotStatus === 3) {
      dispatch(addRobotCheck(-50))
      dispatch(addRobotStatus(-3))
    }
    if (!humanThrow) {
      robotThrow()
    }
  })


  const diceThrow = (player:boolean) => {
    const meanings = generateDicesMeanings(dicesAmount)
    dispatch(addDicesMeanings(meanings))
    const parse = parseDiceCheck(meanings)
    const diceCheck = countingDiceCheck(parse)

    if (diceCheck > 0) {
      dispatch(addDiceCheck(diceCheck))
      console.log(diceCheck)
      console.log(diceCheckStore)
    } else {
      dispatch(diceCheckZero())
      player ? dispatch(addUserStatus(1)) : dispatch(addRobotStatus(1))
      dispatch(changeHumanThrow())
    }

    const amount = filterDicesAmount(meanings, parse)
    dispatch(addDicesAmount(amount))
  }


  const pass = (player:boolean) => {
    console.log(diceCheckStore)
    player ? dispatch(addUserCheck(diceCheckStore)) : dispatch(addRobotCheck(diceCheckStore))
    dispatch(diceCheckZero())
    dispatch(addDicesAmount(5))
    dispatch(changeHumanThrow())
  }


  const handleClickPlay = (event: MouseEvent<HTMLElement>) => {
    diceThrow(humanThrow)
  }

  const handleClickPass = (event: MouseEvent<HTMLElement>) => {
    pass(humanThrow)
  }


  const robotThrow = () => {
    console.log('robot throw')
    diceThrow(humanThrow)
    console.log('robot throw')
    console.log('robot pass')
    pass(humanThrow)
    console.log('robot pass')
  }

  return (
    <ButtonBlockDiv>
      <PlayButton onClick={handleClickPlay}>Играть</PlayButton>
      <PassButton onClick={handleClickPass}>Пас</PassButton>
    </ButtonBlockDiv>
  );
};

