import { gql, useQuery } from "@apollo/client";

export const ISSUE_QUERY = gql`
  query GetIssue($number: Int! $after: String) {
    repository(name: "react", owner: "facebook") {
      id
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
    id: string;
    issue: Node
  }
};

export const useIssueQuery = (number: number) => {

  const { data, loading, error, fetchMore, refetch } =
    useQuery<IssueResponse>(ISSUE_QUERY, {
      variables: {
        number,
      },
      notifyOnNetworkStatusChange: true,
    });
  
  return { data, loading, error, fetchMore, refetch };
};
