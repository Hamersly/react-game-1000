import {PlayersInfoBlockDiv} from "./PlayersInfoBlock.styled";
import {FC} from "react";
import {PlayerInfo} from "../PlayerInfo/PlayerInfo";
import {getPlayers} from "../../store/gameLayer/selectors";
import {IUser} from "../../types/types";
import {useAppSelector} from "../../store/hooks";

export const PlayersInfoBlock: FC = () => {
  const players: IUser[] = useAppSelector(getPlayers)

  return (
    <PlayersInfoBlockDiv>
      {players.map(item =>
        <PlayerInfo
          id={item.id}
          name={item.name}
          check={item.userCheck}
          status={item.status}
          key={item.id}
        />
      )}
    </PlayersInfoBlockDiv>
  );
};