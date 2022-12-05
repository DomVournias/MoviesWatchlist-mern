export const getFilmData = (e) => {
  let userData = {
    name: `${e.currentTarget.nextElementSibling.getAttribute("name")}`,
    year: Number(e.currentTarget.nextElementSibling.getAttribute("year")),
    poster: `${e.currentTarget.nextElementSibling.getAttribute("src")}`,
    imdbID: `${e.currentTarget.nextElementSibling.getAttribute("imdb")}`,
  };

  return userData;
};
