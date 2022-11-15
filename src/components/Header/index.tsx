import React, { FC } from "react";
import FlexContainer from "../styled/FlexContainer";
import { Spacer, SpacerWrapper } from "../styled/Spacer";
import { TitleText } from "../styled/Typography";
import { HeaderLineDivider, HeaderWrapper } from "./styles";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <Spacer verticalSpacing="medium" />
      <SpacerWrapper paddingVertical="medium">
        <FlexContainer>
          {"<"}
          <TitleText fontColor="title" fontSize="small">
            {title}
          </TitleText>
        </FlexContainer>
      </SpacerWrapper>
      <HeaderLineDivider />
    </HeaderWrapper>
  );
};
