import React from "react";
import { Oval } from "react-loader-spinner";
import styled from "styled-components";

const SmallLoader = () => {
  return (
    <StyledLoader
      ariaLabel="loading-indicator"
      height={"1.3em"}
      width={"1.3em"}
      strokeWidth={5}
      strokeWidthSecondary={8}
      color="white"
      secondaryColor="white"
      padding="1em"
    />
  );
};

export default SmallLoader;

const StyledLoader = styled(Oval)`
  padding: 1em;
  & svg {
    padding: 1em;
  }
`;
