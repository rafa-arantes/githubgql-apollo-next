import { gql, useQuery } from "@apollo/client";
import { useMemo } from "react";

export const issueQuery = gql`
  query ($number: Int! $after: String) {
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
        comments(first: 5 after: $after) {
          pageInfo {
            hasNextPage
            endCursor
          }
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
  comments: {
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
    nodes: Comments[]
  }
};

export type IssueResponse = {
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
    useQuery<IssueResponse>(issueQuery, variables);
  
  return { data, loading, error, fetchMore, refetch };
};
