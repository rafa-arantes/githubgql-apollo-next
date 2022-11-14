import Head from "next/head";
import IssueCard from "../components/IssueCard";
import { initializeApollo } from "../apollo/client";
import {
  useIssuesData,
  issuesQuery,
  issuesQueryString,
} from "../hooks/useIssuesData";
import FlexContainer from "../components/styled/FlexContainer";
import { useCallback } from "react";
import { SpacerWrapper } from "../components/styled/Spacer";
import { useSearchBar } from "../hooks/useSearchBar";

const Home = () => {
  const { data, loading, error, fetchMore, refetch } = useIssuesData();
  const { searchByIssueState, searchByTerm } = useSearchBar(refetch);

  const handlePagination = useCallback(() => {
    if (loading) return;
    fetchMore({
      variables: {
        after: data?.search.pageInfo.endCursor,
      },
    });
  }, [fetchMore, data, loading]);

  if (loading && !data) return null;
  if (error) return null;

  const { edges } = data!.search;
  return (
    <div>
      <Head>
        <title>Github Repos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FlexContainer>
        <select onChange={searchByIssueState}>
          <option value="OPEN">OPEN</option>
          <option value="CLOSED">CLOSED</option>
        </select>
        <input onChange={searchByTerm}></input>
      </FlexContainer>
      <FlexContainer flexWrap="wrap" justifyContent="center">
        {edges.map(({ node: { number, id, author, bodyText, title, updatedAt } }) => (
          <IssueCard
            key={id}
            number={number}
            avatarUrl={author.avatarUrl}
            bodyText={bodyText}
            name={author.login}
            title={title}
            updatedAt={updatedAt}
            url={author.url}
            substring={300}
          />
        ))}
      </FlexContainer>
      <FlexContainer flexWrap="wrap" justifyContent="center">
        <SpacerWrapper paddingVertical="medium">
          <button onClick={handlePagination}>
            {loading ? "Loading" : "View More"}
          </button>
        </SpacerWrapper>
      </FlexContainer>
    </div>
  );
};

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();
  try {
    await apolloClient.query({
      query: issuesQuery,
      variables: {
        query: issuesQueryString(undefined, "OPEN"),
        first: 5,
      },
    });

    return {
      props: {
        initialApolloState: apolloClient.cache.extract(),
      },
    };
  } catch (error) {
    return { props: {} };
  }
};

export default Home;
