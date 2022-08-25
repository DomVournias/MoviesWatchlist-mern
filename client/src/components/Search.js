import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { searchFilms } from "../redux/actions/searchAction";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  // const [searchFilm, setSearchFilm] = useState("");
  const filmName = (e) => {
    setSearchValue(e.target.value);
  };

  const dispatch = useDispatch();
  const onKeyResults = (e) => {
    if (e.key === "Enter") {
      // setSearchFilm(searchValue);
      dispatch(searchFilms({ name: searchValue }));
    }
  };
  return (
    <SearchBlock>
      <IoSearch />
      <input
        type="search"
        name="search"
        placeholder="Maybe Avengers?"
        onChange={filmName}
        onKeyDown={onKeyResults}
      />
    </SearchBlock>
  );
};

export default Search;

const SearchBlock = styled.div`
  display: flex;
  width: 33%;
  padding-right: 1em;
  border-radius: 8px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.dark.c};

  > input {
    width: 100%;
  }

  > svg {
    width: 1.45em;
    height: 1.45em;
    padding: 0.5em 0.8em;
    color: ${({ theme }) => theme.whiteD.e};
  }
`;
