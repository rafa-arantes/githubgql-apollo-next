import styled from "styled-components";

type FlexContainerProps = {
  justifyContent?:
    | "normal"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "unsafe"
    | "safe"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end ";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  flexDirection?: "row" |
  "row-reverse" |
  "column" |
  "column-reverse";
  flexWrap?: "nowrap" |
  "wrap"
};



export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props: FlexContainerProps) =>
    props.justifyContent || "normal"};
  align-items: ${(props: FlexContainerProps) =>
    props.alignItems || "flex-start"};
  flex-direction: ${(props: FlexContainerProps) => props.flexDirection || "row"};
  flex-wrap: ${(props: FlexContainerProps) => props.flexWrap || "nowrap"}
`;
