import styled from "styled-components";

const MenuDropdown = () => {
  return (
    <Container>
      <ul>
        <li>Settings</li>
        <li>List</li>
        <span> </span>
        <li>Logout</li>
      </ul>
    </Container>
  );
};

export default MenuDropdown;

const Container = styled.div`
  position: absolute;
  top: 50px;
  right: 0px;
  background-color: ${({ theme }) => theme.dark.c};
  z-index: 10;
  border-radius: 8px;
  overflow: hidden;

  > ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    > li {
      color: ${({ theme }) => theme.whiteD.a};
      padding: 0.5em;
      cursor: pointer;
      transition: 0.3s ease all;
      :hover {
        color: ${({ theme }) => theme.white.a};
        background-color: ${({ theme }) => theme.dark.d};
      }
    }

    > span {
      display: block;
      height: 1px;
      border-top: 1px solid ${({ theme }) => theme.dark.e};
    }
  }
`;
