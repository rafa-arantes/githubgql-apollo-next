import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { debounce } from "lodash";
import { NextRouter, useRouter } from "next/router";
import { useState, ChangeEvent, useCallback } from "react";
import {
  createSearchIssuesQueryString,
  SearchIssuesResponse,
  STATE_OPEN,
} from "./useSearchIssuesQuery";

const setSearchParametersInQueryString = (
  issueState: string,
  searchTerm: string,
  router: NextRouter
) => {
  router.push(
    {
      pathname: `/`,
      query: {
        issueState,
        searchTerm,
      },
    },
    undefined,
    { shallow: true }
  );
};

export const useIssuesSearch = (
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<SearchIssuesResponse>>
) => {
  const router = useRouter();

  const [issueState, setIssueState] = useState<string>(
    (router.query.issueState as string) || STATE_OPEN
  );
  const [searchTerm, setSearchTerm] = useState<string>(
    (router.query.searchTerm as string) || ""
  );

  const searchByTerm = useCallback(
    (value: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(value.target.value);
      setSearchParametersInQueryString(issueState, value.target.value, router);
      refetch({
        query: createSearchIssuesQueryString(issueState, value.target.value),
      });
    },
    [issueState, refetch, setSearchTerm, router]
  );

  const searchByIssueState = useCallback(
    (value: ChangeEvent<HTMLSelectElement>) => {
      setIssueState(value.currentTarget.value);
      setSearchParametersInQueryString(
        value.currentTarget.value,
        searchTerm,
        router
      );
      refetch({
        query: createSearchIssuesQueryString(
          value.currentTarget.value,
          searchTerm
        ),
      });
    },
    [searchTerm, setIssueState, refetch, router]
  );

  const searchByTermDebounced = debounce(searchByTerm, 400);

  return {
    searchByIssueState,
    searchByTerm: searchByTermDebounced,
    searchString: createSearchIssuesQueryString(issueState, searchTerm),
  };
};
