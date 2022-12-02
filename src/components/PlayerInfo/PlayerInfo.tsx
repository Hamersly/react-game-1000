import {FC} from "react";
import {PlayerInfoDiv, PlayerInfoText} from "./PlayerInfo.styled";

interface Props {
  name: string;
  check: number;
  status: number;
}

export const PlayerInfo: FC<Props> = ({name, check, status}) => {

  return (
    <PlayerInfoDiv>
      <PlayerInfoText play={'solid'}>{name}</PlayerInfoText>
      <PlayerInfoText>Счёт: {check}</PlayerInfoText>
      <PlayerInfoText>Болты: {status}</PlayerInfoText>
    </PlayerInfoDiv>
  );
};