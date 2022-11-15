import { ApolloQueryResult } from "@apollo/client";
import { useCallback } from "react";

type FetchMoreVariables = {
  variables: {
    after: string
  },
}

export const usePagination = (fetchMore: <TData>(variables: FetchMoreVariables) => Promise<ApolloQueryResult<TData>>, loading: boolean, after?: string) => {
  const handlePagination = useCallback(() => {
    if (loading || !after) return;
    fetchMore({
      variables: {
        after
      },
    });
  }, [fetchMore, after, loading]);

  return handlePagination
}