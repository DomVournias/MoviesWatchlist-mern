import { useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import background from "../images/back3.png";
import { saveFilm } from "../redux/actions/filmAction";
import { getUserFilms, removeFilm } from "../redux/actions/profileAction";
import {
  FileInfo,
  FilmCard,
  FilmCards,
  FilmName,
  FilmPoster,
  FilmsWrapper,
} from "../styles/FilmsList.styled";

const FrontPage = () => {
  // const { searchResults, loading, error } = useSearch();

  const dispatch = useDispatch();
  const { auth, alert, profile, search } = useSelector((state) => state);

  let films = search.results;

  console.log();

  const handleSaveFilm = async (e) => {
    e.preventDefault();
    let userData = {
      name: `${e.currentTarget.nextElementSibling.getAttribute("name")}`,
      year: Number(e.currentTarget.nextElementSibling.getAttribute("year")),
      poster: `${e.currentTarget.nextElementSibling.getAttribute("src")}`,
      imdbID: `${e.currentTarget.nextElementSibling.getAttribute("imdb")}`,
    };

    await dispatch(saveFilm({ filmInfo: userData, user: auth.user, auth }));
  };

  const handleDeleteFilm = async (e) => {
    e.preventDefault();
    let id = e.currentTarget.value;

    await dispatch(removeFilm({ id, auth }));
  };

  // console.log(dataArrayName);
  // const testArrayName = testMovies.map((e) => e.name);
  // const dataArrayID = data.map((e) => e._id);
  // console.log(data);

  useEffect(() => {
    try {
      const { _id } = auth.user;
      let id = _id;

      dispatch(getUserFilms({ id, auth }));
    } catch (err) {
      console.log(err.message);
    }
  }, [auth, alert]);

  const filmImdbIDs = profile?.films?.map((e) => e.imdbID);

  const getFilmId = (filmName) => {
    return profile?.films?.find((el) => el.name == filmName);
  };

  return (
    <div>
      {/* <AuthAlert alert={alert} setAlert={setAlert} /> */}
      <Users>
        {/* {!films ? (
          <h3>{"searchResults?.Error"}</h3>
        ) : (
          <ul>
            {films?.map((movie) => (
              <li>
                <img src={movie.Poster} />
                <h5>{movie.name}</h5>
                <span>{movie.Year}</span>
              </li>
            ))}
          </ul>
        )} */}
      </Users>
      {films.length === 0 ? (
        "Search for some films..."
      ) : (
        <FilmsWrapper bg={`url(${background})`}>
          <FilmCards>
            {films?.map((movie, i) => (
              <FilmCard key={i}>
                <FilmPoster>
                  {filmImdbIDs?.includes(movie.imdbID) ? (
                    <RemoveFilm
                      onClick={handleDeleteFilm}
                      value={getFilmId(movie.Title)?._id}
                    >
                      <AiFillHeart />
                    </RemoveFilm>
                  ) : (
                    <SaveFilm onClick={handleSaveFilm}>
                      <AiOutlineHeart />
                    </SaveFilm>
                  )}
                  <img
                    src={movie.Poster}
                    name={movie.Title}
                    year={movie.Year}
                    imdb={movie.imdbID}
                  />
                </FilmPoster>
                <FilmName>{movie.Title}</FilmName>
                <FileInfo>
                  <span>{movie.Year}</span>
                </FileInfo>
              </FilmCard>
            ))}
          </FilmCards>
        </FilmsWrapper>
      )}
    </div>
  );
};

export default FrontPage;

const Users = styled.div``;

const SaveFilm = styled.button`
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

const RemoveFilm = styled(SaveFilm)``;
