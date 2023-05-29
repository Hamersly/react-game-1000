import {FC} from "react";
import {PlayerInfoDiv, PlayerInfoText} from "./PlayerInfo.styled";
import {useAppSelector} from "../../store/hooks";
import {getHumanThrow} from "../../store/gameLayer/selectors";

interface IPlayerInfoProps {
  id: number;
  name: string;
  check: number;
  status: number;
}

export const PlayerInfo: FC<IPlayerInfoProps> = ({id, name, check, status}) => {
  const humanThrow: boolean = useAppSelector(getHumanThrow)

  return (
    <PlayerInfoDiv>
      {(id === 0 && humanThrow) || (id === 1 && !humanThrow) ? <PlayerInfoText play={'solid'}>{name}</PlayerInfoText>
        : <PlayerInfoText>{name}</PlayerInfoText>}
      <PlayerInfoText>Счёт: {check}</PlayerInfoText>
      <PlayerInfoText>Болты: {status}</PlayerInfoText>
    </PlayerInfoDiv>
  );
};