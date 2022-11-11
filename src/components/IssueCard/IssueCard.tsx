import React, { FC, memo } from "react";
import Avatar from "../Avatar";
import Card from "../styled/Card";
import { FlexContainer } from "../styled/FlexContainer/FlexContainer";
import Spacer from "../styled/Spacer";
import { ContentText, TitleText } from "../styled/Typography";

interface IssueCardProps {
  title: string;
  bodyText: string;
  avatarUrl: string;
  name: string;
  url: string;
  updatedAt: string;
  substring?: number;
}

const IssueCard: FC<IssueCardProps> = ({
  title,
  bodyText,
  avatarUrl,
  name,
  url,
  updatedAt,
  substring,
}) => {
  const formattedBodyText =
    substring && bodyText.length > substring
      ? `${bodyText.substring(0, substring)}...`
      : bodyText;

  return (
    <Spacer paddingVertical="medium">
      <Card>
        <TitleText>{title}</TitleText>
        <Spacer paddingVertical="medium">
          <ContentText>{formattedBodyText}</ContentText>
        </Spacer>
        <FlexContainer justifyContent="space-between" alignItems="center">
          <Avatar imageUrl={avatarUrl} name={name} url={url} />
          <ContentText>{updatedAt}</ContentText>
        </FlexContainer>
      </Card>
    </Spacer>
  );
};

export default memo(IssueCard)
