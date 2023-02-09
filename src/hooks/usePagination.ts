import { ApolloQueryResult } from "@apollo/client";
import { GraphQLError } from "graphql";
import { useCallback } from "react";

type FetchMoreVariables = {
  variables: {
    after: string;
    [extraVariables: string]: string;
  };
};

export const usePagination = (
  fetchMore: <TData>(
    variables: FetchMoreVariables
  ) => Promise<ApolloQueryResult<TData>>,
  loading: boolean,
  after?: string,
  variables?: { [extraVariables: string]: string }
) => {
  const handlePagination = useCallback(() => {
    if (loading || !after) return;
    fetchMore({
      variables: {
        after,
        ...(variables || {}),
      },
    }).catch(x => new GraphQLError(x));
  }, [fetchMore, after, variables, loading]);

  return handlePagination;
};
