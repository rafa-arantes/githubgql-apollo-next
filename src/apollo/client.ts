import { useMemo } from "react";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { HttpLink } from "@apollo/client/link/http";
import { read } from "fs";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createApolloClient = () =>
  new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: "https://api.github.com/graphql",
      headers: {
        Authorization: "bearer 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",
      },
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            search: {
              merge(existing, incoming){
                const newEdges = existing ? existing.edges : []
                return {...incoming, edges: [...newEdges, ...incoming?.edges]}
              },
              read(existing){
                return existing
              }
            }
          }
        }
      }
    }),
  });

export const initializeApollo = (
  initialState: NormalizedCacheObject | null = null
) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) _apolloClient.cache.restore(initialState);
  if (typeof window === "undefined") return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const useApollo = (initialState: NormalizedCacheObject | null) => useMemo(() => initializeApollo(initialState), [initialState])
