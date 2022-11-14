import { gql, useQuery } from "@apollo/client";
import { useMemo } from "react";

export const issueQuery = gql`
  query ($number: Int!) {
    repository(name: "react", owner: "facebook") {
      issue(number: $number) {
        author {
          avatarUrl
          login
          url
        }
        id
        bodyText
        title
        updatedAt
        comments(first: 30) {
          nodes {
            id
            author {
              login
              avatarUrl
              resourcePath
              url
            }
            bodyText
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

type Comments = {
  id: string;
  author: Author;
  bodyText: string;
}

type Node = {
  __typename: string;
  id: string;
  closed: boolean;
  number: number;
  updatedAt: string;
  title: string;
  bodyText: string;
  author: Author;
  comments: {nodes: Comments[]}
};

export type RepositoryIssuesResponse = {
  repository: {
    issue: Node
  }
};

export const useIssueData = (number: number) => {
  const variables = useMemo(
    () => ({
      variables: {
        number,
      },
      notifyOnNetworkStatusChange: true,
    }),
    [number]
  );

  const { data, loading, error, fetchMore, refetch } =
    useQuery<RepositoryIssuesResponse>(issueQuery, variables);

  return { data, loading, error, fetchMore, refetch };
};
