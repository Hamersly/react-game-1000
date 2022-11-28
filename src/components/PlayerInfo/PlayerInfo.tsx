import {FC} from "react";
import {PlayerInfoDiv, PlayerInfoText} from "./PlayerInfo.styled";

interface Props {
  name: string;
  check: number;
  status: string;
}

export const PlayerInfo: FC<Props> = ({name, check, status}) => {

  return (
    <PlayerInfoDiv>
      <PlayerInfoText>{name}</PlayerInfoText>
      <PlayerInfoText>Счёт: {check}</PlayerInfoText>
      <PlayerInfoText>{status}</PlayerInfoText>
    </PlayerInfoDiv>
  );
};