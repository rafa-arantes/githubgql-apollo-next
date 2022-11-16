import React, { ChangeEvent, FC } from "react";
import { STATE_CLOSED, STATE_OPEN } from "@hooks/useSearchIssuesQuery";
import Card from "@components/styled/StyledCard";
import FlexContainer from "@components/styled/FlexContainer";
import { Spacer } from "@components/styled/Spacer";

import { Input, Select } from "./styles";

interface SearchBarProps {
  searchByTerm: (e: ChangeEvent<HTMLInputElement>) => void;
  searchByIssueState: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SearchBar: FC<SearchBarProps> = ({ searchByTerm, searchByIssueState }) => {
  return (
    <FlexContainer flexWrap="wrap" justifyContent="center">
      <Spacer verticalSpacing="large" />
      <Card noPadding>
        <Input onChange={searchByTerm} placeholder="Search by term..." />
        <Select onChange={searchByIssueState}>
          <option value={STATE_OPEN}>Open</option>
          <option value={STATE_CLOSED}>Closed</option>
        </Select>
      </Card>
    </FlexContainer>
  );
};

export default SearchBar;
