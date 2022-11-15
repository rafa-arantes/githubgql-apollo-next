import styled, { DefaultTheme } from "styled-components";
import { Colors } from "../../styles/utils";

type TagBodyProps = {
  theme: DefaultTheme;
  background: Colors;
};

export const TagBody = styled.div`
  padding-top: ${(props: TagBodyProps) => props.theme.spacing.small};
  padding-bottom: ${(props: TagBodyProps) => props.theme.spacing.small};
  padding-left: ${(props: TagBodyProps) => props.theme.spacing.medium};
  padding-right: ${(props: TagBodyProps) => props.theme.spacing.medium};
  background-color: ${(props: TagBodyProps) =>
    props.theme.colors[props.background]};
  border-radius: 5px
`;
