import React, { FC, memo } from "react";
import Link from "next/link";

import { STATE_OPEN } from "@hooks/useSearchIssuesQuery";
import Card from "@components/styled/StyledCard";
import FlexContainer from "@components/styled/FlexContainer";
import { Spacer, SpacerWrapper } from "@components/styled/Spacer";
import { ContentText, TitleText } from "@components/styled/Typography";

import Tag from "../Tag";
import { IssueCardHeader } from "./styles";
import Avatar from "../Avatar";
import dayjs from "dayjs";


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
            <Tag background={state === STATE_OPEN ? "purple" : "red"}>
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
          <ContentText>{dayjs(updatedAt).format('MM/DD/YYYY HH:mm:ss')}</ContentText>
        </FlexContainer>
      </Card>
    </>
  );
};

export default memo(IssueCard);
