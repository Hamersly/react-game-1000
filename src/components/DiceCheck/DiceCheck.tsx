import {FC} from "react";
import {DiceCheckDiv, DiceCheckInfo, DiceCheckSum} from "./DiceCheck.styled";
import {useAppSelector} from "../../store/hooks";
import {getDiceCheck} from "../../store/gameLayer/selectors";

export const DiceCheck: FC = () => {
  const diceCheck: number = useAppSelector(getDiceCheck)

  return (
    <DiceCheckDiv>
      <DiceCheckSum>+{diceCheck}</DiceCheckSum>
      <DiceCheckInfo>Тут будет инфо. текст</DiceCheckInfo>
    </DiceCheckDiv>
  );
};