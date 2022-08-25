import { useEffect, useState } from "react";
import { CgRemoveR } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import background from "../images/back3.png";
import {
  getUserFilms,
  getUserProfile,
  removeFilm,
} from "../redux/actions/profileAction";
import {
  FileInfo,
  FilmCard,
  FilmCards,
  FilmName,
  FilmPoster,
  FilmsWrapper,
} from "../styles/FilmsList.styled";

const Profile = () => {
  const { auth, profile, alert } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const { username } = useParams();

  const getData = async () => {
    dispatch(getUserProfile({ username, auth }));
    const { _id } = await profile?.users[0];
    let id = _id;
    console.log(id);
    dispatch(getUserFilms({ id, auth }));
  };

  const handleDeleteFilm = async (e) => {
    e.preventDefault();
    let id = e.currentTarget.value;

    await dispatch(removeFilm({ id, auth }));
    // e.target.getAttribute("film").removeItem();
  };

  useEffect(() => {
    getData();
  }, [username, dispatch]);

  const films = profile.films;

  console.log(profile.films);

  return (
    <div>
      <div>Hello, {profile.users[0]?.username}</div>
      <FilmsWrapper bg={`url(${background})`}>
        {profile.loading === true ? (
          "Loading..."
        ) : (
          <FilmCards>
            {films?.map((film, i) => (
              <FilmCard key={i} film={i}>
                <FilmPoster>
                  <RemoveFilm onClick={handleDeleteFilm} value={film._id}>
                    <CgRemoveR />
                  </RemoveFilm>
                  <img src={film.poster} name={film.name} year={film.year} />
                </FilmPoster>
                <FilmName>{film.name}</FilmName>
                <FileInfo>
                  <span>{film.year}</span>
                </FileInfo>
              </FilmCard>
            ))}
          </FilmCards>
        )}
      </FilmsWrapper>
    </div>
  );
};

export default Profile;

const RemoveFilm = styled.button`
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
