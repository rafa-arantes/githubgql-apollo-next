import { DefaultTheme } from "styled-components";

export type FontColors =
  | "content"
  | "title"
  | "highlight"
  | "fadedhighlight"
  | "white";

export type Spacing =
  | "none"
  | "small"
  | "medium"
  | "mediumAlt"
  | "xmedium"
  | "large"
  | "xlarge";

export type FontSizes = "small" | "medium" | "large";

export type Colors = "red" | "purple" | "background" | "container";

export const getFontColorFromThemeProps = (
  { theme }: { theme: DefaultTheme },
  fontColor: FontColors
) => theme.font.color[fontColor];

export const getFontSizeFromThemeProps = (
  { theme }: { theme: DefaultTheme },
  size: FontSizes
) => theme.font.size[size];

export const getColorFromThemeProps = (
  { theme }: { theme: DefaultTheme },
  color: Colors
) => theme.colors[color];

export const getSpacingFromThemeProps = (
  { theme }: { theme: DefaultTheme },
  spacingKey?: Spacing
) => theme.spacing[spacingKey || "none"];
