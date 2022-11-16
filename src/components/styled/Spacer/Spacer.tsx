import styled, { DefaultTheme } from "styled-components";
import { getSpacingFromThemeProps, Spacing } from "@styles/utils";

type SpacerProps = {
  theme: DefaultTheme;
  verticalSpacing?: Spacing;
  horizontalSpacing?: Spacing;
  marginVertical?: Spacing;
  paddingVertical?: Spacing;
  marginHorizontal?: Spacing;
  paddingHorizontal?: Spacing;
};

export const SpacerWrapper = styled.div`
  padding: ${(props: SpacerProps) =>
    `${ getSpacingFromThemeProps(props, props.paddingVertical)} ${ getSpacingFromThemeProps(props, props.paddingHorizontal)} `};
  margin: ${(props: SpacerProps) =>
    `${getSpacingFromThemeProps(props, props.marginVertical)} ${getSpacingFromThemeProps(props, props.marginHorizontal)} `};
`;

export const Spacer = styled.div`
  height: ${(props: SpacerProps) => `${getSpacingFromThemeProps(props, props.verticalSpacing)}`};
  width: ${(props: SpacerProps) => `${props.horizontalSpacing ? getSpacingFromThemeProps(props, props.horizontalSpacing) : "100%"}`};
`
