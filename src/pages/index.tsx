import { gql, useQuery } from "@apollo/client";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import IssueCard from "../../public/components/IssueCard/IssueCard";
import { initializeApollo } from "../apollo/client";

const query = gql`
{
  repository(followRenames: false, name: "react", owner: "facebook") {
    issues(first: 5 states: CLOSED orderBy: {field: CREATED_AT direction: DESC}) {
      totalCount
      edges {
        node {
          id
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
`

type Author = {
  avatarUrl: string;
  login: string;
  url: string;
}

type Node = {
  node: {
    id: string;
    closed: boolean;
    updatedAt: string;
    title:  string;
    bodyText:  string;
    author: Author;
  }
}

type Edges = Node[]

type RepositoryIssuesResponse = {
  repository: {
    issues: {
      totalCount: number;
      edges: Edges
    }
  }
}

const Home = () => {

  const {data, loading, error} = useQuery<RepositoryIssuesResponse>(query)
  
  if(loading) return null
  if(error) return null

  const { edges } = data!.repository.issues
 
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
}

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};



export default Home
