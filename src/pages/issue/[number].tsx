import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { FC } from "react";
import { initializeApollo } from "apollo/client";
import CommentCard from "@components/CommentCard";
import Header from "@components/Header";
import IssueCard from "@components/IssueCard";
import Loading from "@components/Loading";
import StyledButton from "@components/styled/StyledButton";
import FlexContainer from "@components/styled/FlexContainer";
import { Spacer, SpacerWrapper } from "@components/styled/Spacer";
import { ISSUE_QUERY, useIssueQuery } from "@hooks/useIssueQuery";
import { usePagination } from "@hooks/usePagination";
import { Error } from "@components/Error/Error";

interface IssueProps {
  number: number;
}

const Issue: FC<IssueProps> = (props) => {
  const { data, loading, error, fetchMore } = useIssueQuery(props.number);

  const handlePagination = usePagination(
    fetchMore,
    loading,
    data?.repository?.issue?.comments?.pageInfo.endCursor
  );

  return (
    <div>
      <Head>
        <title key="title">Issue</title>
      </Head>
      {loading && <Loading />}
      <FlexContainer flexWrap="wrap" justifyContent="center">
        <Header title="Issue" hasBackNavigation />
      </FlexContainer>

      {error && <Error />}

      {data && (
        <>
          <FlexContainer flexWrap="wrap" justifyContent="center">
            <IssueCard
              number={data.repository.issue.number}
              avatarUrl={data.repository.issue.author.avatarUrl}
              bodyText={data.repository.issue.bodyText}
              name={data.repository.issue.author.login}
              title={data.repository.issue.title}
              updatedAt={data.repository.issue.updatedAt}
              url={data.repository.issue.author.url}
            />
          </FlexContainer>
          <FlexContainer flexWrap="wrap" justifyContent="center">
            <Header title="Answers" />
          </FlexContainer>
          <FlexContainer flexWrap="wrap" justifyContent="center">
            {data.repository.issue.comments.nodes.map((comment) => (
              <CommentCard
                avatarUrl={comment.author.avatarUrl}
                bodyText={comment.bodyText}
                name={comment.author.login}
                url={comment.author.url}
                key={comment.id}
              />
            ))}
          </FlexContainer>
        </>
      )}
      {data?.repository.issue.comments.pageInfo.hasNextPage && (
        <FlexContainer flexWrap="wrap" justifyContent="center">
          <SpacerWrapper paddingVertical="medium">
            <StyledButton disabled={loading} onClick={handlePagination}>
              {loading ? "Loading" : "View More"}
            </StyledButton>
          </SpacerWrapper>
        </FlexContainer>
      )}
      <Spacer verticalSpacing="large" />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
}) => {
  const serverReq = !req.url?.startsWith("/_next");
  if (!serverReq)
    return {
      props: {
        number: Number(query.number),
      },
    };

  const apolloClient = initializeApollo();
  try {

    await apolloClient.query({
      query: ISSUE_QUERY,
      variables: {
        number: Number(query.number),
      },
    });

    return {
      props: {
        number: Number(query.number),
        initialApolloState: apolloClient.cache.extract(),
      },
    };

  } catch (error) {
    return {
      props: {
        number: Number(query.number),
      },
    };
  }
};

export default Issue;
