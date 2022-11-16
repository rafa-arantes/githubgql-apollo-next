import React, { FC, memo } from "react";
import Avatar from "../Avatar";
import Card from "@components/styled/StyledCard";
import FlexContainer from "@components/styled/FlexContainer";
import { Spacer, SpacerWrapper } from "@components/styled/Spacer";
import { ContentText } from "@components/styled/Typography";

interface CommentCardProps {
  bodyText: string;
  avatarUrl: string;
  name: string;
  url: string;
}

const CommentCard: FC<CommentCardProps> = ({
  bodyText,
  avatarUrl,
  name,
  url,
}) => {
  return (
    <>
      <Spacer verticalSpacing="large" />
      <Card>
        <SpacerWrapper paddingVertical="medium">
          <ContentText>{bodyText}</ContentText>
        </SpacerWrapper>
        <FlexContainer justifyContent="flex-start" alignItems="center">
          <Avatar imageUrl={avatarUrl} name={name} url={url} />
        </FlexContainer>
      </Card>
    </>
  );
};

export default memo(CommentCard);
