import styled from "styled-components";

export const ButtonBlockDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20%;
`

export const Button = styled.button`
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0 0 10px 5px black;
  font-size: 25px;
`

export const PlayButton = styled(Button)`
  background-color: blue;
`

export const PassButton = styled(Button)`
  background-color: red;
`