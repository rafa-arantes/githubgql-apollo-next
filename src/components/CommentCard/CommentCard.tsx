import React, { FC, memo } from "react";
import Avatar from "../Avatar";
import Card from "../styled/Card";
import FlexContainer from "../styled/FlexContainer";
import { Spacer, SpacerWrapper } from "../styled/Spacer";
import { ContentText, TitleText } from "../styled/Typography";
import Link from 'next/link';

interface CommentCardProps {
  bodyText: string;
  avatarUrl: string;
  name: string;
  url: string;
  substring?: number;
}

const CommentCard: FC<CommentCardProps> = ({
  bodyText,
  avatarUrl,
  name,
  url,
  substring,
}) => {
  const formattedBodyText =
    substring && bodyText.length > substring
      ? `${bodyText.substring(0, substring)}...`
      : bodyText;

  return (
    <>
      <Spacer verticalSpacing="large" />
      <Card>
        <SpacerWrapper paddingVertical="medium">
          <ContentText>{formattedBodyText}</ContentText>
        </SpacerWrapper>
        <FlexContainer justifyContent="flex-start" alignItems="center">
          <Avatar imageUrl={avatarUrl} name={name} url={url} />
        </FlexContainer>
      </Card>
    </>
  );
};

export default memo(CommentCard);
