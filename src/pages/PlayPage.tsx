import React, {FC} from "react";
import {Header} from "../components/Header/Header";
import {DiceList} from "../components/DiceList/DiceList";
import {DiceCheck} from "../components/DiceCheck/DiceCheck";
import {PlayersInfoBlock} from "../components/PlayersInfoBlock/PlayersInfoBlock";
import {ButtonBlock} from "../components/ButtonBlock/ButtonBlock";

export const PlayPage: FC = () => {
  return (
    <>
      <Header/>
      <DiceList/>
      <DiceCheck/>
      <PlayersInfoBlock/>
      <ButtonBlock/>
    </>
  );
};