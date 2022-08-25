import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  padding: 0em 4em;
  background-color: ${({ theme }) => theme.dark.a};
`;
export const Logo = styled(Link)`
  > h2 {
    font-size: 30px;
    font-weight: bolder;
  }
`;
