import {FC, MouseEvent, useEffect} from "react";
import {ButtonBlockDiv, PassButton, PlayButton} from "./ButtonBlock.styled";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {
  addDiceCheck,
  addDicesAmount,
  addDicesMeanings,
  addRobotCheck,
  addRobotStatus,
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
import {
  countingDiceCheck,
  filterDicesAmount,
  generateDicesMeanings,
  parseDiceCheck,
  randomInteger,
  sleep
} from "../../helpers/helpers";


export const ButtonBlock: FC = () => {
  const diceCheckStore: number = useAppSelector(getDiceCheck)
  const dicesAmount: number = useAppSelector(getDicesAmount)
  const userStatus: number = useAppSelector(getUserStatus)
  const robotStatus: number = useAppSelector(getRobotStatus)
  const getThrow = useAppSelector(getHumanThrow)

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
    if (!getThrow) {
      robotThrow()
    }
  })

  const diceThrow = (humanThrow: boolean): number => {
    //Бросок кубиков. Если 0 - переход броска к сопернику, если больше 0 - возвращает выпавшую сумму.
    const meanings = generateDicesMeanings(dicesAmount)
    dispatch(addDicesMeanings(meanings))
    const parse = parseDiceCheck(meanings)
    const diceCheck = countingDiceCheck(parse)

    if (diceCheck > 0) {
      dispatch(addDiceCheck(diceCheck))
    } else {
      dispatch(diceCheckZero())
      humanThrow ? dispatch(addUserStatus(1)) : dispatch(addRobotStatus(1))
      dispatch(changeHumanThrow(humanThrow))
    }

    console.log(diceCheck, ' diceThrow() ', humanThrow)

    const amount = filterDicesAmount(meanings, parse)
    dispatch(addDicesAmount(amount))
    return diceCheck
  }


  const playSeries = (diceThrow: any): number => {
    //Решение робота о броске, или пасе, на основании генератора случайного числа (1, 0)
    let count: number = 0
    do {
      const dice: number = diceThrow(getThrow)
      count += dice
      if (!randomInteger(0, 1)) {
        console.log('playSeries() Мне хватит! ', getThrow)
        return count
      }
      sleep(2000)
    } while (count)
    return count
  }

  const pass = (player: boolean, diceThrow: number = 0) => {
    player ? dispatch(addUserCheck(diceCheckStore)) : dispatch(addRobotCheck(diceThrow))
    dispatch(diceCheckZero())
    dispatch(addDicesAmount(5))
    dispatch(changeHumanThrow(player))
    console.log('Pass() ', player, ' ', getThrow)
  }

  const robotThrow = () => {
    console.log('robotThrow()')
    pass(getThrow, playSeries(diceThrow))
  }

  const handleClickPlay = (event: MouseEvent<HTMLElement>) => {
    diceThrow(getThrow)
  }

  const handleClickPass = (event: MouseEvent<HTMLElement>) => {
    pass(getThrow)
  }

  return (
    <ButtonBlockDiv>
      <PlayButton onClick={handleClickPlay}>Играть</PlayButton>
      <PassButton onClick={handleClickPass}>Пас</PassButton>
    </ButtonBlockDiv>
  );
};
// TODO: при броске робота кубики на экране не меняются
