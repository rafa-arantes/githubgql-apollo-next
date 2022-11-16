import FlexContainer from "@components/styled/FlexContainer";
import { Spacer } from "@components/styled/Spacer";
import StyledCard from "@components/styled/StyledCard";
import {
  ContentText,
  HighlightText,
  TitleText,
} from "@components/styled/Typography";
import Link from "next/link";
import React, { FC } from "react";

type ErrorProps = {
  retryLater?: boolean;
};

const Error: FC<ErrorProps> = ({ retryLater }) => {
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
            {retryLater
              ? "Please, try again later"
              : `Please, refresh your page or go back to home page clicking `}
            {!retryLater && <Link href="/">here</Link>}
          </ContentText>
        </StyledCard>
      </FlexContainer>
    </>
  );
};

export default Error
