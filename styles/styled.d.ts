import 'styled-components';
import {dark} from './themes/dark'


declare module 'styled-components' {
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
  }
}