import { gql, useQuery } from "@apollo/client";
import { useMemo } from "react";

export const issuesQuery = gql`
  query ($first: Int $after: String $query: String!) {
    search(
      query: $query
      type: ISSUE
      after: $after
      first: $first
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          ... on Issue {
            id
            number
            closed
            updatedAt
            title
            bodyText
            author {
              avatarUrl
              login
              url
            }
          }
        }
      }
    }
  }

`;

type Author = {
  avatarUrl: string;
  login: string;
  url: string;
};

type Node = {
  __typename: string;
  id: string;
  closed: boolean;
  number: number;
  updatedAt: string;
  title: string;
  bodyText: string;
  author: Author;
};

export type RepositoryIssuesResponse = {
  search: {
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
    edges: {
      cursor: string;
      node: Node;
    }[];
  };
};

export const issuesQueryString = (states?: string, searchTerm?: string) => `repo:facebook/react is:issue ${states ? `is:${states}` : ""} ${searchTerm ? `'${searchTerm}' in:title` : ""}`

export const useIssuesData = (
  after?: string,
  searchTerm?: string,
  states?: string
) => {

  const variables = useMemo(
    () => ({
      variables: {
        first: 5,
        after,
        query: issuesQueryString(states, searchTerm)
      },
      notifyOnNetworkStatusChange: true
    }),
    [after, states, searchTerm]
  );

  const { data, loading, error, fetchMore, refetch } =
    useQuery<RepositoryIssuesResponse>(
      issuesQuery,
      variables,
    );

  return { data, loading, error, fetchMore, refetch };
};
