import styled from "styled-components";
import { getColorFromThemeProps } from "../../../styles/utils";

const StyledCard = styled.div`
  width: 100%;
  max-width: 770px;
  position: relative;
  background: ${props => getColorFromThemeProps(props, "container")};
  border-radius: 5px;
  padding: 26px 20px;
`

export default StyledCard