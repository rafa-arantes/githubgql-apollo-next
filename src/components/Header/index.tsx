import { useRouter } from "next/router";
import React, { FC } from "react";
import FlexContainer from "../styled/FlexContainer";
import { Spacer, SpacerWrapper } from "../styled/Spacer";
import { TitleText } from "../styled/Typography";
import { HeaderLineDivider, HeaderWrapper } from "./styles";

type HeaderProps = {
  title: string;
  hasBackNavigation?: boolean;
};

export const Header = ({ title, hasBackNavigation }: HeaderProps) => {
  const router = useRouter();
  return (
    <HeaderWrapper>
      <Spacer verticalSpacing="medium" />
      <SpacerWrapper paddingVertical="medium">
        <FlexContainer>
          {hasBackNavigation && (
            <TitleText onClick={router.back}>{"<"}</TitleText>
          )}
          <TitleText fontColor="title" fontSize="small">
            {title}
          </TitleText>
        </FlexContainer>
      </SpacerWrapper>
      <HeaderLineDivider />
    </HeaderWrapper>
  );
};
