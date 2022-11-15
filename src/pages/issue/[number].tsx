import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { FC } from "react";
import { initializeApollo } from "../../apollo/client";
import CommentCard from "../../components/CommentCard";
import { Header } from "../../components/Header";
import IssueCard from "../../components/IssueCard";
import { Button } from "../../components/styled/Button/styles";
import FlexContainer from "../../components/styled/FlexContainer";
import { Spacer, SpacerWrapper } from "../../components/styled/Spacer";
import { issueQuery, useIssueData } from "../../hooks/useIssueData";
import { usePagination } from "../../hooks/usePagination";

interface IProps {
  number: number;
}

const Issue: FC<IProps> = (props) => {
  const { data, loading, error, fetchMore } = useIssueData(props.number);

  const handlePagination = usePagination(
    fetchMore,
    loading,
    data?.repository?.issue?.comments?.pageInfo.endCursor
  );

  if (loading && !data) return null;
  if (error) return null;

  const { issue } = data!.repository;
  return (
    <div>
      <Head>
        <title>Issue: {issue.title}</title>
      </Head>

      <FlexContainer flexWrap="wrap" justifyContent="center">
        <Header title={`Issue`} hasBackNavigation />
      </FlexContainer>
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
        <Header title={`Answers`} />
      </FlexContainer>
      <FlexContainer flexWrap="wrap" justifyContent="center">
        {issue.comments.nodes.map((comment) => (
          <CommentCard
            avatarUrl={comment.author.avatarUrl}
            bodyText={comment.bodyText}
            name={comment.author.login}
            url={comment.author.url}
            key={comment.id}
          />
        ))}
      </FlexContainer>
      {issue.comments.pageInfo.hasNextPage ? (
        <FlexContainer flexWrap="wrap" justifyContent="center">
          <SpacerWrapper paddingVertical="medium">
            <Button disabled={loading} onClick={handlePagination}>
              {loading ? "Loading" : "View More"}
            </Button>
          </SpacerWrapper>
        </FlexContainer>
      ) : <Spacer verticalSpacing="large"/>}
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
