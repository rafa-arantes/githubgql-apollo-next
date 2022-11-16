import { useRouter } from "next/router";
import React, { FC } from "react";
import FlexContainer from "@components/styled/FlexContainer";
import { Spacer, SpacerWrapper } from "@components/styled/Spacer";
import { TitleText } from "@components/styled/Typography";
import { HeaderLineDivider, HeaderWrapper, ReturnButton } from "./styles";

type HeaderProps = {
  title: string;
  hasBackNavigation?: boolean;
};

const Header: FC<HeaderProps> = ({ title, hasBackNavigation }: HeaderProps) => {
  const router = useRouter();
  return (
    <HeaderWrapper>
      <Spacer verticalSpacing="medium" />
      <SpacerWrapper paddingVertical="medium">
        <FlexContainer>
          {hasBackNavigation && (
            <ReturnButton onClick={router.back}>{"<"}</ReturnButton>
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

export default Header