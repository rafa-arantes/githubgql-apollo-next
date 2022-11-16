import styled, { DefaultTheme } from "styled-components";
import { getColorFromThemeProps } from "@styles/utils";

type StyledCardProps = {
  noPadding?: boolean;
  theme: DefaultTheme;
};

const StyledCard = styled.div`
  width: 100%;
  max-width: 770px;
  position: relative;
  background: ${(props: StyledCardProps) =>
    getColorFromThemeProps(props, "container")};
  border-radius: 5px;
  padding: ${(props: StyledCardProps) => (props.noPadding ? "0" : "26px 20px")};
`;

export default StyledCard;
