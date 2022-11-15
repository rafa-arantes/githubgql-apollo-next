import styled, { DefaultTheme } from "styled-components";
import { Colors } from "../../styles/utils";
import { HighlightText } from "../styled/Typography";

type TagBodyProps = {
  theme: DefaultTheme;
  background: Colors;
};

const TagBody = styled.div`
  padding-top: ${(props: TagBodyProps) => props.theme.spacing.small};
  padding-bottom: ${(props: TagBodyProps) => props.theme.spacing.small};
  padding-left: ${(props: TagBodyProps) => props.theme.spacing.medium};
  padding-right: ${(props: TagBodyProps) => props.theme.spacing.medium};
  background-color: ${(props: TagBodyProps) =>
    props.theme.colors[props.background]};
  border-radius: 5px
`;

type TagProps = {
  background: Colors;
  children: string;
};

export const Tag = ({ background, children }: TagProps) => {
  return (
    <TagBody background={background}>
      <HighlightText fontColor="white" fontSize="small">{children}</HighlightText>
    </TagBody>
  );
};
