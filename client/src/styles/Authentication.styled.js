import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 20vh;
`;
export const Header = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5em;
  margin-bottom: 3em;

  > h2 {
    color: ${({ theme }) => theme.white.e};
    font-size: 2rem;
  }

  > p {
    color: ${({ theme }) => theme.whiteD.e};
    font-size: 1rem;
  }
`;

export const Section = styled.section`
  padding: 1em;
  width: 100%;
  max-width: 320px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  justify-content: center;
  align-items: center;

  & button {
    font-size: 1rem;
    font-weight: 800;
    padding: 0.7em 2em;
    margin-top: 1em;
    border-radius: 8px;
    color: ${({ theme }) => theme.whiteD.a};
    background-color: ${({ theme }) => theme.blue};
    cursor: pointer;

    :disabled {
      opacity: 0.8;
      filter: saturate(40%);
      cursor: no-drop;
    }
  }
`;

export const InputWrap = styled.div`
  position: relative;
  width: auto;
  height: auto;
  width: 100%;
  display: flex;
`;

export const Label = styled.label`
  position: absolute;
  pointer-events: none;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  transition: 0.3s ease all;
  color: ${({ theme }) => theme.whiteD.e};
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 26px 23px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.dark.b};
  background-attachment: none !important; // Hides LastPass extra space
  /* background-image: none !important; */
  padding-right: 0 !important; // Hides LastPass extra space

  :focus + ${Label}, :not(:placeholder-shown) + ${Label} {
    top: 23%;
    left: 10px;
    transform: translateY(-50%);
    font-size: 0.8em;
  }
`;
