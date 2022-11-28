import styled from "styled-components";
import {DiceCheckSum} from "../DiceCheck/DiceCheck.styled";

export const PlayerInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`

export const PlayerInfoText = styled(DiceCheckSum)`
  font-size: 25px;
  color: silver;
`