import {FC} from "react";
import {PlayerInfoDiv, PlayerInfoText} from "./PlayerInfo.styled";

interface IPlayerInfoProps {
  name: string;
  check: number;
  status: number;
}

export const PlayerInfo: FC<IPlayerInfoProps> = ({name, check, status}) => {

  return (
    <PlayerInfoDiv>
      <PlayerInfoText play={'solid'}>{name}</PlayerInfoText>
      <PlayerInfoText>Счёт: {check}</PlayerInfoText>
      <PlayerInfoText>Болты: {status}</PlayerInfoText>
    </PlayerInfoDiv>
  );
};