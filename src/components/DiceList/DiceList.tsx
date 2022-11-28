import {FC} from "react";
import {Dice} from "../Dice/Dice";
import {DiceListDiv} from "./DiceList.styled";
import {getDicesMeanings} from "../../store/gameLayer/selectors";
import {useAppSelector} from "../../store/hooks";


export const DiceList: FC = () => {
  const meanings: number[] | undefined = useAppSelector(getDicesMeanings)

  return (
    <DiceListDiv>
      {meanings ? meanings.map(item =>
        <Dice diceNumber={item}/>
      ) : <></>}
    </DiceListDiv>
  );
};