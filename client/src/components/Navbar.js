import { Link, useLocation } from "react-router-dom";
import {
  Button,
  IsMobile,
  LinkStyled,
  LoginRegister,
  Logo,
  NavLinks,
  Wrapper,
} from "../styles/Navbar.styled";
import Search from "./Search";

import { useDispatch, useSelector } from "react-redux";
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
      {location.pathname === "/" && (
        <IsMobile>
          <Search />{" "}
        </IsMobile>
      )}
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
