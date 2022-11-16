import FlexContainer from "@components/styled/FlexContainer";
import { Spacer, SpacerWrapper } from "@components/styled/Spacer";
import StyledCard from "@components/styled/StyledCard";
import {
  ContentText,
  HighlightText,
  TitleText,
} from "@components/styled/Typography";
import Link from "next/link";
import React, { FC } from "react";

export const Error: FC = () => {
  return (
    <>
      <Spacer verticalSpacing="large" />
      <FlexContainer justifyContent="center">
        <StyledCard>
          <TitleText>Oh Snap!</TitleText>
          <Spacer verticalSpacing="small" />
          <HighlightText fontColor="content">
            There was an error trying to execute your request :(
          </HighlightText>
          <ContentText>
            Please, refresh your page or go back to home page clicking{" "}
            <Link href="/">here</Link>
          </ContentText>
        </StyledCard>
      </FlexContainer>
    </>
  );
};
