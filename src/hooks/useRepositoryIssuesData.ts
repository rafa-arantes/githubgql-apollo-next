import { gql, useQuery } from "@apollo/client";
import { useMemo } from "react";

export const issuesQuery = gql`
  query ($after: String $query: String!) {
    search(
      query: $query
      type: ISSUE
      after: $after
      first: 5
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
            state
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
  state: "OPEN" | "CLOSED";
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

export const useRepositoryIssuesData = (
  after?: string,
  searchTerm?: string,
  states?: string
) => {

  const variables = useMemo(
    () => ({
      variables: {
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