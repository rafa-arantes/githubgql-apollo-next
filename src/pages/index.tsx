import Head from "next/head";
import IssueCard from "../components/IssueCard";
import { initializeApollo } from "../apollo/client";
import {
  useRepositoryIssuesData,
  issuesQuery,
  issuesQueryString,
} from "../hooks/useRepositoryIssuesData";
import FlexContainer from "../components/styled/FlexContainer";
import { useCallback } from "react";
import { SpacerWrapper } from "../components/styled/Spacer";
import { useSearchBar } from "../hooks/useSearchBar";
import { usePagination } from "../hooks/usePagination";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";

const SUBSTRING_CHARACTERS = 300;

const Home = () => {
  const { data, loading, error, fetchMore, refetch } =
    useRepositoryIssuesData();
  const { searchByIssueState, searchByTerm } = useSearchBar(refetch);

  const handlePagination = usePagination(
    fetchMore,
    loading,
    data?.search.pageInfo.endCursor
  );

  if (loading && !data) return null;
  if (error) return null;

  const { edges } = data!.search;
  return (
    <div>
      <Head>
        <title>Github Repos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar
        searchByIssueState={searchByIssueState}
        searchByTerm={searchByTerm}
      />
      <FlexContainer flexWrap="wrap" justifyContent="center">
        <Header title={`Issues`} />
      </FlexContainer>
      <FlexContainer flexWrap="wrap" justifyContent="center">
        {edges.map(
          ({
            node: { number, id, author, bodyText, title, updatedAt, state },
          }) => (
            <IssueCard
              key={id}
              number={number}
              avatarUrl={author.avatarUrl}
              bodyText={bodyText}
              name={author.login}
              state={state}
              title={title}
              updatedAt={updatedAt}
              url={author.url}
              substring={SUBSTRING_CHARACTERS}
              showState
            />
          )
        )}
      </FlexContainer>
      {data?.search.pageInfo.hasNextPage && (
        <FlexContainer flexWrap="wrap" justifyContent="center">
          <SpacerWrapper paddingVertical="medium">
            <button onClick={handlePagination}>
              {loading ? "Loading" : "View More"}
            </button>
          </SpacerWrapper>
        </FlexContainer>
      )}
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
