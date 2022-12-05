import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import Search from "../components/Search";
import film from "../images/film.png";
import { getUserFilms } from "../redux/actions/profileAction";
import { Message } from "../styles/Frontpage.styled";

import Films from "../components/Films";
import { OnlyMobile } from "../styles/GlobalStyles";

const FrontPage = () => {
  const dispatch = useDispatch();
  const { auth, profile, search } = useSelector((state) => state);

  let films = search.results;

  useEffect(() => {
    try {
      const { _id } = auth.user;
      let id = _id;

      dispatch(getUserFilms({ id, auth }));
    } catch (err) {
      console.log(err.message);
    }
  }, [auth, alert]);

  console.log(auth);
  // console.log(process.env.REACT_APP_API_URL);

  return (
    <>
      <OnlyMobile>
        <Search />
      </OnlyMobile>
      {films === undefined && (
        <Message>
          <img src={film} alt="film roll" />
          <h3>No films of {search.searchValue} found...</h3>
        </Message>
      )}

      {films && (
        <>
          {films.length === 0 ? (
            <Message>
              <img src={film} alt="film roll" />
              <h3>Search for some films...</h3>
            </Message>
          ) : (
            <Films />
          )}
        </>
      )}
    </>
  );
};

export default FrontPage;
