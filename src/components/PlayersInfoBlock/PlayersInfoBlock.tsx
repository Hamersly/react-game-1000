import {PlayersInfoBlockDiv} from "./PlayersInfoBlock.styled";
import {FC} from "react";
import {PlayerInfo} from "../PlayerInfo/PlayerInfo";
import {useSelector} from "react-redux";
import {getPlayers} from "../../store/gameLayer/selectors";
import {User} from "../../types/types";

export const PlayersInfoBlock: FC = () => {
  const players: User[] = useSelector(getPlayers)

  return (
    <PlayersInfoBlockDiv>
      {players.map(item =>
        <PlayerInfo
          name={item.name}
          check={item.check}
          status={item.status}
          key={item.id}
        />
      )}

      {/*<PlayerInfo*/}
      {/*  name={'Робот'}*/}
      {/*  check={555}*/}
      {/*  status={'Самосвал!'}*/}
      {/*/>*/}
    </PlayersInfoBlockDiv>
  );
};