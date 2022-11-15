import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { debounce } from "lodash";
import {  useState, useRef, ChangeEvent, useCallback } from "react";
import { issuesQueryString, RepositoryIssuesResponse } from "./useRepositoryIssuesData";



export const useSearchBar = (refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<RepositoryIssuesResponse>>) => {
  const [issueState, setIssueState] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const searchByTerm = useCallback((value: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(value.target.value)
    refetch({
      query: issuesQueryString(issueState, value.target.value),
    })
  }, [issueState, refetch, setSearchTerm])

  const searchByIssueState = useCallback((value:ChangeEvent<HTMLSelectElement>) => {
    setIssueState(value.currentTarget.value)
    refetch({
      query: issuesQueryString(value.currentTarget.value, searchTerm),
    })
  }, [searchTerm, setIssueState, refetch])

  const searchByTermDebounced = debounce(searchByTerm, 400)

  return { searchByIssueState, searchByTerm: searchByTermDebounced };
};
