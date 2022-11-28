import {FC, MouseEvent} from "react";
import {ButtonBlockDiv, PassButton, PlayButton} from "./ButtonBlock.styled";
import {useAppDispatch} from "../../store/hooks";
import {addDicesMeanings} from "../../store/gameLayer/slice";

export const ButtonBlock: FC = () => {
  const dispatch = useAppDispatch();

  const generateDicesMeanings = (): number[] => {
    const meanings = []
    const min = Math.ceil(1);
    const max = Math.floor(7);
    for (let i = 0; i < 5; i++) {
      const meaning = Math.floor(Math.random() * (max - min)) + min
      meanings.push(meaning)
    }
    console.log(meanings)

    return meanings
  }

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    const men = generateDicesMeanings()
    dispatch(addDicesMeanings(men))
  }

  return (
    <ButtonBlockDiv>
      <PlayButton onClick={handleClick}>Играть</PlayButton>
      <PassButton>Пас</PassButton>
    </ButtonBlockDiv>
  );
};