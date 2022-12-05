import {PlayersInfoBlockDiv} from "./PlayersInfoBlock.styled";
import {FC} from "react";
import {PlayerInfo} from "../PlayerInfo/PlayerInfo";
import {useSelector} from "react-redux";
import {getPlayers} from "../../store/gameLayer/selectors";
import {IUser} from "../../types/types";

export const PlayersInfoBlock: FC = () => {
  const players: IUser[] = useSelector(getPlayers)

  return (
    <PlayersInfoBlockDiv>
      {players.map(item =>
        <PlayerInfo
          name={item.name}
          check={item.userCheck}
          status={item.status}
          key={item.id}
        />
      )}
    </PlayersInfoBlockDiv>
  );
};