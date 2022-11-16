import styled, { DefaultTheme } from "styled-components";
import { Colors, getColorFromThemeProps, getSpacingFromThemeProps } from "../../styles/utils";

type TagBodyProps = {
  theme: DefaultTheme;
  background: Colors;
};

export const TagBody = styled.div`
  padding-top: ${(props: TagBodyProps) => getSpacingFromThemeProps(props, "small")};
  padding-bottom: ${(props: TagBodyProps) => getSpacingFromThemeProps(props, "small")};
  padding-left: ${(props: TagBodyProps) => getSpacingFromThemeProps(props, "medium")};
  padding-right: ${(props: TagBodyProps) => getSpacingFromThemeProps(props, "medium")};
  background-color: ${(props: TagBodyProps) => getColorFromThemeProps(props, props.background)};
  border-radius: 5px
`;
