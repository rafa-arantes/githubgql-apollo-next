import styled, { keyframes } from "styled-components";


const appearFromTop = keyframes`
  from { top: -100px }
  to { top: 100px }
`

export const LoadingContainer = styled.div`
  z-index: 2;

  position: fixed;
  display: flex;
  justify-content: center;
  top: -100px;
  width: 100vw;

  animation-name: ${appearFromTop};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`