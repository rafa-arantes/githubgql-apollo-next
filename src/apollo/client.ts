import { useMemo } from "react";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { HttpLink } from "@apollo/client/link/http";
import { Issue, Query } from "./typePolicies";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createApolloClient = () =>
  new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: "https://api.github.com/graphql",
      headers: {
        Authorization: `bearer ${typeof window === "undefined" ? process.env.GH_PERSONAL_TOKEN : localStorage.getItem('GH_PERSONAL_TOKEN')}`,
      },
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Issue,
        Query,
      },
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

export const useApollo = (initialState: NormalizedCacheObject | null) =>
  useMemo(() => initializeApollo(initialState), [initialState]);
