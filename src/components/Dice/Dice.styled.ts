import styled from "styled-components";

interface Props {
  src: number
  alt: string
}

export const DiceImage = styled.img.attrs<Props>(({src, alt}) => ({
  src: src,
  alt: alt
}))`
  width: 50px;
  height: 50px;
  box-shadow: 0 0 10px 5px black;
`