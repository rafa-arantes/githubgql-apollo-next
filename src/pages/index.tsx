import { gql, useQuery } from "@apollo/client";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import IssueCard from "../components/IssueCard/IssueCard";
import { initializeApollo } from "../apollo/client";

const query = gql`
  query ($first: Int, $states: [IssueState!], $orderBy: IssueOrder) {
    repository(name: "react", owner: "facebook") {
      issues(first: $first, states: $states, orderBy: $orderBy) {
        totalCount
        edges {
          node {
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
  node: {
    id: string;
    closed: boolean;
    number: number;
    updatedAt: string;
    title: string;
    bodyText: string;
    author: Author;
  };
};

type Edges = Node[];

type RepositoryIssuesResponse = {
  repository: {
    issues: {
      totalCount: number;
      edges: Edges;
    };
  };
};

const Home = () => {
  const { data, loading, error } = useQuery<RepositoryIssuesResponse>(query, {
    variables: {
      orderBy: { field: "CREATED_AT", direction: "DESC" },
      first: 5,
      states: "OPEN",
    },
  });

  if (loading) return null;
  if (error) return null;

  const { edges } = data!.repository.issues;

  return (
    <div>
      <Head>
        <title>Github Repos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {edges.map((issue) => (
        <IssueCard
          key={issue.node.id}
          avatarUrl={issue.node.author.avatarUrl}
          bodyText={issue.node.bodyText}
          name={issue.node.author.login}
          title={issue.node.title}
          updatedAt={issue.node.updatedAt}
          url={issue.node.author.url}
          substring={300}
        />
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();
  try {
    await apolloClient.query({
      query,
      variables: {
        $orderBy: { field: "CREATED_AT", direction: "DESC" },
        $first: 5,
        states: "OPEN",
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
