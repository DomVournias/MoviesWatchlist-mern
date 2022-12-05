import styled, { keyframes } from "styled-components";
import { device } from "./Breakpoints";

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80vh;
  justify-content: center;
  align-items: center;
  > h3 {
    font-size: 1.6rem;
  }
  > img {
    width: 65px;
    height: 65px;
    margin-right: 0.5em;
    animation: ${rotate} 4s linear infinite;
  }

  @media ${device.tablet} {
    > h3 {
      font-size: 1.35rem;
    }
    > img {
      width: 45px;
      height: 45px;
    }
  }
`;

export const SaveFilm = styled.button`
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  display: flex;
  margin: 0.3em;
  cursor: pointer;

  > svg {
    width: 1.5em;
    height: 1.5em;
    /* padding: 0.3em; */
  }
`;

export const RemoveFilm = styled(SaveFilm)``;
