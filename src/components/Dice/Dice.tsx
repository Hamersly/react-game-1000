import React, {FC} from "react";
import dice_1 from '../../assets/1.png';
import dice_2 from '../../assets/2.png';
import dice_3 from '../../assets/3.png';
import dice_4 from '../../assets/4.png';
import dice_5 from '../../assets/5.png';
import dice_6 from '../../assets/6.png';
import {DiceImage} from "./Dice.styled";

interface IDiceProps {
  diceNumber: number
}

export const Dice: FC<IDiceProps> = ({diceNumber}) => {
  const list = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6]

  return (
    <div>
      <div>
        <DiceImage src={list[diceNumber - 1]} alt=''/>
      </div>
    </div>
  );
};