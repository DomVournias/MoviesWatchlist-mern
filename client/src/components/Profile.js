import { useEffect, useState } from "react";
import { CgRemoveR } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import background from "../images/back3.png";
import { getUserFilms, removeFilm } from "../redux/actions/profileAction";
import {
  FileInfo,
  FilmCard,
  FilmCards,
  FilmName,
  FilmPoster,
  FilmsWrapper,
} from "../styles/FilmsList.styled";
import Loader from "./Loader";

const Profile = () => {
  const { auth, profile, alert } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const { username } = useParams();

  const handleDeleteFilm = async (e) => {
    e.preventDefault();
    let id = e.currentTarget.value;

    await dispatch(removeFilm({ id, auth }));
    // e.target.getAttribute("film").removeItem();
  };

  // const getFilms = async () => {
  //   dispatch(getUserProfile({ username, auth }));
  //   const id = await profile.users[0]._id;
  //   dispatch(getUserFilms({ id, auth }));
  // };

  useEffect(() => {
    if (auth.user) {
      let id = auth.user._id;
      dispatch(getUserFilms({ id, auth }));
    }
  }, [auth]);

  const films = profile.films;

  return (
    <Container>
      {auth.user ? (
        <Message>
          <span>
            <p>Hello, </p>
            <h3>{auth.user?.username}</h3>
          </span>

          <p>
            You've added <span>{films.length}</span> films to your watchlist so
            far,
            <br /> keep adding more 🤠
          </p>
        </Message>
      ) : null}

      <FilmsWrapper bg={`url(${background})`}>
        {profile.loading === true ? (
          <Loader />
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
    </Container>
  );
};

export default Profile;

const Container = styled.div``;

const Message = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em 4em;
  text-align: center;

  > span {
    margin-bottom: 5px;
  }

  h3 {
    font-weight: 700;
  }

  > p {
    span {
      font-weight: 700;
    }
  }
`;

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
