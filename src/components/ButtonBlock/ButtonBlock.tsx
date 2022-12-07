import {FC, MouseEvent} from "react";
import {ButtonBlockDiv, PassButton, PlayButton} from "./ButtonBlock.styled";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {addDiceCheck, addDicesMeanings, addUserCheck, diceCheckZero} from "../../store/gameLayer/slice";
import {getDiceCheck} from "../../store/gameLayer/selectors";
import {countingDiceCheck, generateDicesMeanings} from "../../helpers/helpers";

export const ButtonBlock: FC = () => {
  const diceCheckStore: number = useAppSelector(getDiceCheck)
  const dispatch = useAppDispatch();

  const handleClickPlay = (event: MouseEvent<HTMLElement>) => {
    const meanings = generateDicesMeanings()
    dispatch(addDicesMeanings(meanings))

    const diceCheck = countingDiceCheck(meanings)
    if (diceCheck > 0) dispatch(addDiceCheck(diceCheck))
    else dispatch(diceCheckZero())
  }

  const handleClickPass = (event: MouseEvent<HTMLElement>) => {
    dispatch(addUserCheck(diceCheckStore))
    dispatch(diceCheckZero())
  }

  return (
    <ButtonBlockDiv>
      <PlayButton onClick={handleClickPlay}>Играть</PlayButton>
      <PassButton onClick={handleClickPass}>Пас</PassButton>
    </ButtonBlockDiv>
  );
};
