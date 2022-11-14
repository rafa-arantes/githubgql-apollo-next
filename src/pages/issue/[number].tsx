import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { FC } from "react";
import { initializeApollo } from "../../apollo/client";
import Avatar from "../../components/Avatar";
import CommentCard from "../../components/CommentCard";
import IssueCard from "../../components/IssueCard";
import Card from "../../components/styled/Card";
import FlexContainer from "../../components/styled/FlexContainer";
import { SpacerWrapper } from "../../components/styled/Spacer";
import { ContentText } from "../../components/styled/Typography";
import { issueQuery, useIssueData } from "../../hooks/useIssueData";

interface IProps {
  number: number;
}

const Issue: FC<IProps> = (props) => {
  const { data, loading, error } = useIssueData(props.number);

  if (loading && !data) return null;
  if (error) return null;

  const { issue } = data!.repository;
  return (
    <div>
      <Head>
        <title>Issue</title>
      </Head>
      <FlexContainer flexWrap="wrap" justifyContent="center">
        <IssueCard
          number={issue.number}
          avatarUrl={issue.author.avatarUrl}
          bodyText={issue.bodyText}
          name={issue.author.login}
          title={issue.title}
          updatedAt={issue.updatedAt}
          url={issue.author.url}
        />
      </FlexContainer>
      <FlexContainer flexWrap="wrap" justifyContent="center">
        {issue.comments.nodes.map(comment => <CommentCard avatarUrl={comment.author.avatarUrl} bodyText={comment.bodyText} name={comment.author.login} url={comment.author.url} key={comment.id} />)}
      </FlexContainer>
      <FlexContainer flexWrap="wrap" justifyContent="center">
        <SpacerWrapper paddingVertical="medium">
          <button>
            view more
            {/* {loading ? "Loading" : "View More"} */}
          </button>
        </SpacerWrapper>
      </FlexContainer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  try {
    await apolloClient.query({
      query: issueQuery,
      variables: {
        number: Number(context.query.number),
      },
    });

    return {
      props: {
        number: Number(context.query.number),
        initialApolloState: apolloClient.cache.extract(),
      },
    };
  } catch (error) {
    return { props: {} };
  }
};

export default Issue;
