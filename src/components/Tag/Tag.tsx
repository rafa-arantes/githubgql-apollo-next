import styled, { DefaultTheme } from "styled-components";
import { Colors } from "../../styles/utils";

type TagProps = {
  theme: DefaultTheme,
  background: Colors
}

const Tag = styled.button`
  padding-top: ${(props: TagProps) => props.theme.spacing.small};
  padding-bottom: ${(props: TagProps) => props.theme.spacing.small};
  padding-left: ${(props: TagProps) => props.theme.spacing.medium};
  padding-right: ${(props: TagProps) => props.theme.spacing.medium};
  background-color: ${(props: TagProps) => props.theme.colors[props.background]}
`