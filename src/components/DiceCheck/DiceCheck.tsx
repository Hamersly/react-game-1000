import {FC} from "react";
import {DiceCheckDiv, DiceCheckInfo, DiceCheckSum} from "./DiceCheck.styled";

export const DiceCheck: FC = () => {
  return (
    <DiceCheckDiv>
      <DiceCheckSum>+255</DiceCheckSum>
      <DiceCheckInfo>Доберись до 300!</DiceCheckInfo>
    </DiceCheckDiv>
  );
};