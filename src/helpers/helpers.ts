import {IcountItems} from "../types/types";

export const generateDicesMeanings = (dicesAmount: number): number[] => {
  //Генерируем массив с пятью элементами типа number в количестве 5 штук
  const meanings: number[] = []
  const min = Math.ceil(1);
  const max = Math.floor(7);

  for (let i = 0; i < dicesAmount; i++) {
    const meaning = Math.floor(Math.random() * (max - min)) + min
    meanings.push(meaning)
  }
  console.log(meanings)
  return meanings
}

export const parseDiceCheck = (meanings: number[] = []): IcountItems => {
  //Узнаём, сколько раз каждое возможное число выпало на кубиках
  const countItems: IcountItems = {}

  for (let i = 1; i < 7; i++) {
    countItems[i] = meanings.filter(meaning => meaning === i).length
  }

  console.log(countItems)
  return countItems
}

export const countingDiceCheck = (countItems: IcountItems): number => {
  //TODO: рефачить по возможности

  let counter: number = 0

  if (
    countItems[1] === 1 &&
    countItems[2] === 1 &&
    countItems[3] === 1 &&
    countItems[4] === 1 &&
    countItems[5] === 1
  ) {
    counter += 125
    return counter
  } else if (
    countItems[2] === 1 &&
    countItems[3] === 1 &&
    countItems[4] === 1 &&
    countItems[5] === 1 &&
    countItems[6] === 1
  ) {
    counter += 250
    return counter
  }

  for (let key in countItems) {
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
    }
  }

  console.log(counter)
  return counter
}

export const filterDicesAmount = (meanings: number[], countItems: IcountItems): number => {
  //Уменьшаем количество кубиков на количество учитываемых при игре значений
  let amount: number = meanings.length
  const firstAmount: number = amount
  for (let key in countItems) {
    if (key === '1' || key === '5') amount -= countItems[key]
    else if (countItems[key] >= 3) amount -= countItems[key]
  }

  if (amount === 0 || amount === firstAmount) amount = 5

  console.log(amount)
  return amount

}