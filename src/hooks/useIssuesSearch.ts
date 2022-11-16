import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { debounce } from "lodash";
import {  useState, useRef, ChangeEvent, useCallback } from "react";
import { createSearchIssuesQueryString, RepositoryIssuesResponse, STATE_OPEN } from "./useSearchIssuesQuery";



export const useIssuesSearch = (refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<RepositoryIssuesResponse>>) => {
  const [issueState, setIssueState] = useState<string>(STATE_OPEN);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const searchByTerm = useCallback((value: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(value.target.value)
    refetch({
      query: createSearchIssuesQueryString(issueState, value.target.value),
    })
  }, [issueState, refetch, setSearchTerm])

  const searchByIssueState = useCallback((value:ChangeEvent<HTMLSelectElement>) => {
    setIssueState(value.currentTarget.value)
    refetch({
      query: createSearchIssuesQueryString(value.currentTarget.value, searchTerm),
    })
  }, [searchTerm, setIssueState, refetch])

  const searchByTermDebounced = debounce(searchByTerm, 400)

  return { searchByIssueState, searchByTerm: searchByTermDebounced, searchString: createSearchIssuesQueryString(issueState, searchTerm) };
};
