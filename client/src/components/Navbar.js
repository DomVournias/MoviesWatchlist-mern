import { Link, useLocation } from "react-router-dom";
import { Logo, Wrapper } from "../styles/Navbar.styled";
import Search from "./Search";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { logout } from "../redux/actions/authAction";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const { profile } = useSelector((state) => state);
  // console.log(profile);

  return (
    <Wrapper>
      <Logo to="/">
        <h2>Watchlist</h2>
      </Logo>
      {location.pathname === "/" && <Search />}
      {!auth.user ? (
        <LoginRegister>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </LoginRegister>
      ) : (
        <NavLinks>
          {location.pathname === "/" ? (
            <LinkStyled to={`/users/${auth.user.username}`}>
              My watchlist
            </LinkStyled>
          ) : (
            <LinkStyled to="/">Add films</LinkStyled>
          )}
          {location.pathname === `/users/${auth.user.username}` && (
            <Button onClick={() => dispatch(logout())}>Logout</Button>
          )}
        </NavLinks>
      )}

      {/* <ProfileMenu /> */}
    </Wrapper>
  );
};

export default Navbar;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5em;
`;

const Button = styled.button`
  padding: 0.5em 1em;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.dark.d};
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;
const LinkStyled = styled(Link)`
  padding: 0.5em 1em;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.blue};
`;

const LoginRegister = styled.div`
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
