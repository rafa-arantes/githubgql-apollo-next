import Head from "next/head";

import {
  createSearchIssuesQueryString,
  SEARCH_ISSUES_QUERY,
  STATE_OPEN,
  useSearchIssuesQuery,
} from "@hooks/useSearchIssuesQuery";
import { initializeApollo } from "apollo/client";
import { useIssuesSearch } from "@hooks/useIssuesSearch";
import { usePagination } from "@hooks/usePagination";
import { Spacer, SpacerWrapper } from "@components/styled/Spacer";
import FlexContainer from "@components/styled/FlexContainer";
import Header from "@components/Header";
import IssueCard from "@components/IssueCard";
import Loading from "@components/Loading/Loading";
import SearchBar from "@components/SearchBar";
import StyledButton from "@components/styled/StyledButton";
import { GetServerSideProps } from "next";

const SUBSTRING_CHARACTERS = 300;

const Home = () => {
  const { data, loading, error, fetchMore, refetch } = useSearchIssuesQuery();

  const { searchByIssueState, searchByTerm, searchString } =
    useIssuesSearch(refetch);

  const handlePagination = usePagination(
    fetchMore,
    loading,
    data?.search.pageInfo.endCursor,
    { query: searchString }
  );

  if (error) return <div>error</div>;

  return (
    <div>
      <Head>
        <title>Github Repos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading && <Loading />}

      <SearchBar
        searchByIssueState={searchByIssueState}
        searchByTerm={searchByTerm}
      />
      {data && (
        <>
          <FlexContainer flexWrap="wrap" justifyContent="center">
            <Header title="Issues" />
          </FlexContainer>
          <FlexContainer flexWrap="wrap" justifyContent="center">
            {data.search.edges.map(
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
        </>
      )}
      {data?.search.pageInfo.hasNextPage && (
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const serverReq = !req.url?.startsWith("/_next");
  if (!serverReq)
    return {
      props: {},
    };
    
  const apolloClient = initializeApollo();
  try {
    await apolloClient.query({
      query: SEARCH_ISSUES_QUERY,
      variables: {
        after: undefined,
        query: createSearchIssuesQueryString(STATE_OPEN, undefined),
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
