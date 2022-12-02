import styled from "styled-components";
import {DiceCheckSum} from "../DiceCheck/DiceCheck.styled";

interface Props {
  play?: string
}

export const PlayerInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`

export const PlayerInfoText = styled(DiceCheckSum)<Props>`
  font-size: 25px;
  color: silver;
  border-bottom: ${(props) => props.play} 5px yellow`
