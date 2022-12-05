import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "./Breakpoints";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  padding: 0em 4em;
  background-color: ${({ theme }) => theme.dark.a};

  @media ${device.laptop} {
    padding: 0em 2em;
  }

  @media ${device.tablet} {
    padding: 0em 1em;
  }
`;

export const IsMobile = styled.div`
  width: 33%;
  @media ${device.tablet} {
    display: none;
  }
`;

export const Logo = styled(Link)`
  > h2 {
    font-size: 30px;
    font-weight: bolder;
    @media ${device.tablet} {
      font-size: 25px;
    }
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1.5em;
`;

export const Button = styled.button`
  padding: 0.5em 1em;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.dark.d};
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;
export const LinkStyled = styled(Link)`
  padding: 0.5em 1em;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.blue};
`;

export const LoginRegister = styled.div`
  display: flex;
  gap: 1.5em;
  color: ${({ theme }) => theme.whiteD.e};
  :hover {
  }
  > a {
    padding: 0.5em;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease all;
    :hover {
      color: #fff;
    }
  }
`;
