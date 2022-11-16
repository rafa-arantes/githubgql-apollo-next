import { ApolloQueryResult } from "@apollo/client";
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
    });
  }, [fetchMore, after, variables, loading]);

  return handlePagination;
};
