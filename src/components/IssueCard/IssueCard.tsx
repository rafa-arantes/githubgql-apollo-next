import React, { FC, memo } from "react";
import Avatar from "../Avatar";
import Card from "../styled/Card";
import FlexContainer from "../styled/FlexContainer";
import { Spacer, SpacerWrapper } from "../styled/Spacer";
import { ContentText, TitleText } from "../styled/Typography";
import Link from "next/link";
import { IssueCardHeader } from "./styles";
import { Tag } from "../Tag/Tag";

interface IssueCardProps {
  title: string;
  number?: number;
  bodyText: string;
  showState?: boolean;
  state?: string;
  avatarUrl: string;
  name: string;
  url: string;
  updatedAt: string;
  substring?: number;
}

const IssueCard: FC<IssueCardProps> = ({
  title,
  bodyText,
  number,
  showState,
  state,
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
    <>
      <Spacer verticalSpacing="large" />
      <Card>
        {showState && (
          <IssueCardHeader>
            <Tag background={state === "OPEN" ? "purple" : "red"}>
              {state ? state : ""}
            </Tag>
          </IssueCardHeader>
        )}
        {number ? (
          <Link href={`/issue/${number}`}>
            <TitleText>{title}</TitleText>
          </Link>
        ) : (
          <TitleText>{title}</TitleText>
        )}
        <SpacerWrapper paddingVertical="medium">
          <ContentText>{formattedBodyText}</ContentText>
        </SpacerWrapper>
        <FlexContainer justifyContent="space-between" alignItems="center">
          <Avatar imageUrl={avatarUrl} name={name} url={url} />
          <ContentText>{updatedAt}</ContentText>
        </FlexContainer>
      </Card>
    </>
  );
};

export default memo(IssueCard);
