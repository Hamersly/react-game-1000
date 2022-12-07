import {FC, MouseEvent, useEffect} from "react";
import {ButtonBlockDiv, PassButton, PlayButton} from "./ButtonBlock.styled";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {
  addDiceCheck,
  addDicesAmount,
  addDicesMeanings,
  addUserCheck,
  addUserStatus,
  diceCheckZero
} from "../../store/gameLayer/slice";
import {getDiceCheck, getDicesAmount, getUserStatus} from "../../store/gameLayer/selectors";
import {countingDiceCheck, filterDicesAmount, generateDicesMeanings, parseDiceCheck} from "../../helpers/helpers";

export const ButtonBlock: FC = () => {
  const diceCheckStore: number = useAppSelector(getDiceCheck)
  const dicesAmount: number = useAppSelector(getDicesAmount)
  const userStatus: number = useAppSelector(getUserStatus)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userStatus === 3) {
      dispatch(addUserCheck(-50))
      dispatch(addUserStatus(-3))
    }
  })

  const handleClickPlay = (event: MouseEvent<HTMLElement>) => {
    const meanings = generateDicesMeanings(dicesAmount)
    dispatch(addDicesMeanings(meanings))
    const parse = parseDiceCheck(meanings)
    const diceCheck = countingDiceCheck(parse)

    if (diceCheck > 0) {
      dispatch(addDiceCheck(diceCheck))
    } else {
      dispatch(diceCheckZero())
      dispatch(addUserStatus(1))
    }

    const amount = filterDicesAmount(meanings, parse)
    dispatch(addDicesAmount(amount))
  }

  const handleClickPass = (event: MouseEvent<HTMLElement>) => {
    dispatch(addUserCheck(diceCheckStore))
    dispatch(diceCheckZero())
    dispatch(addDicesAmount(5))
  }

  return (
    <ButtonBlockDiv>
      <PlayButton onClick={handleClickPlay}>Играть</PlayButton>
      <PassButton onClick={handleClickPass}>Пас</PassButton>
    </ButtonBlockDiv>
  );
};
