import styled, { DefaultTheme } from "styled-components";
import { getSpacingFromThemeProps, Spacing } from "../../../../src/styles/utils";

type SpacerProps = {
  theme: DefaultTheme;
  marginVertical?: Spacing;
  paddingVertical?: Spacing;
  marginHorizontal?: Spacing;
  paddingHorizontal?: Spacing;
};

const Spacer = styled.div`
  padding: ${(props: SpacerProps) =>
    `${ getSpacingFromThemeProps(props, props.paddingVertical)} ${ getSpacingFromThemeProps(props, props.paddingHorizontal)} `};
  margin: ${(props: SpacerProps) =>
    `${getSpacingFromThemeProps(props, props.marginVertical)} ${getSpacingFromThemeProps(props, props.marginHorizontal)} `};
`;

export default Spacer