import styled from "styled-components";

export const DiceCheckDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 20%;
  margin: 5% 0;
`

export const DiceCheckSum = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 60px;
  color: yellow;
  text-shadow: 5px 5px 10px black;
`

export const DiceCheckInfo = styled(DiceCheckSum)`
  font-size: 25px;
  color: red;
`