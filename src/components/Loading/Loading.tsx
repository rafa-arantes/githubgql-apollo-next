import React, { FC } from "react";
import StyledSpinner from "../styled/StyledSpinner";
import { LoadingContainer } from "./styles";

const Loading: FC = () => {
  return (
    <LoadingContainer data-testid="loading">
      <StyledSpinner />
    </LoadingContainer>
  );
};

export default Loading