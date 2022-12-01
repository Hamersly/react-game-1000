import {FC, MouseEvent} from "react";
import {ButtonBlockDiv, PassButton, PlayButton} from "./ButtonBlock.styled";
import {useAppDispatch} from "../../store/hooks";
import {addDiceCheck, addDicesMeanings} from "../../store/gameLayer/slice";

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

  const countingDiceCheck = (numbers: number[] = []): number => {
    if (numbers) {
      let counter: number = 0
      const countItems: any = {}
      for (let i = 1; i < 7; i++) {
        countItems[i] = numbers.filter(number => number === i).length
      }

      for (const key in countItems) {
        if (key === '1') {
          if (countItems[key] === 1) counter += 10
          else if (countItems[key] === 2) counter += 20
          else if (countItems[key] === 3) counter += 100
          else if (countItems[key] === 4) counter += 200
          else if (countItems[key] === 5) counter += 1000
        } else if (key === '5') {
          if (countItems[key] === 1) counter += 5
          else if (countItems[key] === 2) counter += 10
          else if (countItems[key] === 3) counter += 50
          else if (countItems[key] === 4) counter += 100
          else if (countItems[key] === 5) counter += 500
        } else {
          if (countItems[key] === 3) counter += Number(key) * 10
          else if (countItems[key] === 4) counter += Number(key) * 20
          else if (countItems[key] === 5) counter += Number(key) * 100
          // else if() counter += 125
        }
      }

      console.log(counter)
      return counter

    } else return 0
  }

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    const meanings = generateDicesMeanings()
    dispatch(addDicesMeanings(meanings))

    const diceCheck = countingDiceCheck(meanings)
    dispatch(addDiceCheck(diceCheck))
  }

  return (
    <ButtonBlockDiv>
      <PlayButton onClick={handleClick}>Играть</PlayButton>
      <PassButton>Пас</PassButton>
    </ButtonBlockDiv>
  );
};