import styled, { DefaultTheme } from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 770px;
`
export const HeaderLineDivider = styled.div`
  width: 100%;
  max-width: 770px;
  height: 1px;
  background-color: ${(props: {theme: DefaultTheme}) => props.theme.colors.container}
`