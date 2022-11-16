import styled, { keyframes } from "styled-components";
import { getColorFromThemeProps } from "@styles/utils";

const rotate = keyframes`
  from { transform:rotate(0deg); }
  to { transform:rotate(360deg); }
`;
const StyledSpinner = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50px;
  border-top: solid 10px ${(props) => getColorFromThemeProps(props, "purple")};
  border-bottom: solid 10px
    ${(props) => getColorFromThemeProps(props, "purple")};
  border-left: solid 10px ${(props) => getColorFromThemeProps(props, "purple")};
  border-right: solid 10px transparent;

  background-color: transparent;
  animation-name: ${rotate};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

export default StyledSpinner;
