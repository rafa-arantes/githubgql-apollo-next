import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    font: {
      color: {
        content: string;
        title: string;
        highlight: string;
        fadedhighlight: string;
        white: string;
      };
      size: {
        small: string;
        medium: string;
        large: string;
      };
    };
    colors: {
      red: string;
      purple: string;
      container: string;
      background: string;
    };
    spacing: {
      none: string;
      small: string;
      medium: string;
      mediumAlt: string;
      xmedium: string;
      large: string;
      xlarge: string;
    };
  }
}
