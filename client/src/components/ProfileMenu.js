import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import profileImage from "../images/profile-picture-5.jpg";
import MenuDropdown from "./MenuDropdown";

const ProfileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user } = useContext(AuthContext);
  let navigate = useNavigate();

  const handleMenuClick = () => {
    navigate(`/users/${user._id}/films`);
  };
  return (
    <Container>
      {!user ? (
        <LoginRegister>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </LoginRegister>
      ) : (
        <>
          <ProfilePicture onClick={handleMenuClick}>
            <img src={profileImage} />
          </ProfilePicture>
          {showMenu && <MenuDropdown />}
        </>
      )}
    </Container>
  );
};

export default ProfileMenu;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
`;

const ProfilePicture = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 80px;
  overflow: hidden;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
  }
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
