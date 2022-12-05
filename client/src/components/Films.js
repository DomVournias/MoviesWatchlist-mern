import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  FileInfo,
  FilmCard,
  FilmCards,
  FilmName,
  FilmPoster,
  FilmsWrapper,
} from "../styles/FilmsList.styled";
import { RemoveFilm, SaveFilm } from "../styles/Frontpage.styled";

import { useDispatch, useSelector } from "react-redux";
import background from "../images/back3.png";
import { saveFilm } from "../redux/actions/filmAction";
import { removeFilm } from "../redux/actions/profileAction";
import { getFilmData } from "../utils/functions";
import AuthAlert from "../alerts/authAlert";

const Films = () => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);
  const { auth, profile, search } = useSelector((state) => state);

  let films = search.results;

  const handleSaveFilm = (e) => {
    e.preventDefault();
    if (auth.user) {
      dispatch(saveFilm({ filmInfo: getFilmData(e), user: auth.user, auth }));
      setAlert("authorized");
    }
    if (!auth.user) {
      setAlert("unauthorized");
    }
  };

  const handleDeleteFilm = (e) => {
    e.preventDefault();
    let id = e.currentTarget.value;
    dispatch(removeFilm({ id, auth }));
  };

  const filmImdbIDs = profile?.films?.map((e) => e.imdbID);

  const getFilmId = (filmName) => {
    return profile?.films?.find((el) => el.name == filmName);
  };

  return (
    <FilmsWrapper bg={`url(${background})`}>
      <AuthAlert alert={alert} setAlert={setAlert} />
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
  );
};

export default Films;
